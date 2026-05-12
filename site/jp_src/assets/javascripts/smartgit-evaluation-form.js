(() => {
  const form = document.getElementById('evaluation-form');
  if (!form) return;

  const alertBox = document.getElementById('eval-alert');
  const successBox = document.getElementById('eval-success');
  const certEl = document.getElementById('activation-certificate');
  const copyBtn = document.getElementById('btn-copy-certificate');

  // Prefill some context
  try {
    document.getElementById('evaluation_source_url').value = location.href;
    document.getElementById('evaluation_query_params').value = location.search;
    // Map query parameters to hidden fields (like old site)
    const qs = new URLSearchParams(location.search);
    const qpInput = qs.get('input');
    if (qpInput) {
      const inputField = document.getElementById('evaluation_input');
      if (inputField) inputField.value = qpInput;
    }
    const qpProduct = qs.get('product');
    if (qpProduct) {
      const prodField = document.getElementById('evaluation_product');
      if (prodField) prodField.value = qpProduct;
    }
  } catch (_) {}

  // Hugo-injected config (via ExecuteAsTemplate)
  const WORKER_BASE_URL_PARAM = {{ with .Site.Params.workerBaseURL }}{{ . | jsonify }}{{ else }}null{{ end }};
  const SITE_BASE_URL = {{ .Site.BaseURL | jsonify }};
  const TURNSTILE_SITEKEY = {{ .Site.Params.turnstileSiteKey | jsonify }};
  const TURNSTILE_DISABLE_SECRET = {{ with .Site.Params.turnstileDisableSecret }}{{ . | jsonify }}{{ else }}null{{ end }};

  const disableSecret = TURNSTILE_DISABLE_SECRET || '';
  const cftsKey = TURNSTILE_SITEKEY;
  // Don't pre-seed with disable secret; wait for Turnstile callback
  let cftsToken = '';
  let hasSubmitted = false;

  const renderTurnstile = () => {
    const widgetId = turnstile.render('#turnstile-container', {
      sitekey: cftsKey,
      callback: function (token) {
        // Record token from Turnstile; disableSecret may override on submit
        cftsToken = token;
        // If an input is present from the URL, auto-submit once token is ready
        try { maybeAutoSubmit && maybeAutoSubmit(); } catch (_) {}
      }
    });
    return widgetId;
  };

  const resetTurnstile = () => {
    try { turnstile.reset(); } catch (_) {}
    cftsToken = '';
  };

  const showAlert = (message, type = 'danger') => {
    alertBox.classList.remove('d-none', 'alert-danger', 'alert-success', 'alert-warning', 'alert-info');
    alertBox.classList.add('alert-' + type);
    alertBox.textContent = message;
  };

  const clearAlert = () => {
    alertBox.classList.add('d-none');
    alertBox.textContent = '';
  };

  // Initial info box depending on presence of input
  try {
    const hasInput = !!(document.getElementById('evaluation_input')?.value);
    if (hasInput) {
      showAlert('Preparing your evaluation license ...', 'info');
    } else {
      showAlert('Get a free 30-day evaluation. Download SmartGit and follow the setup wizard; it will automatically request your license.', 'info');
    }
  } catch (_) {}

  const showCertificate = (text) => {
    if (!text) return;
    certEl.textContent = text;
    successBox.classList.remove('d-none');
    clearAlert();
  };

  const submitEvaluation = () => {
    if (hasSubmitted) return;
    hasSubmitted = true;
    successBox.classList.add('d-none');

    // Build FormData from form fields and include Turnstile token
    const fd = new FormData(form);
    // Use disable secret to override, otherwise use actual Turnstile token
    const tokenToSend = disableSecret || cftsToken;
    if (tokenToSend) {
      // Ensure only one token value is present
      fd.set('cf-turnstile-response', tokenToSend);
    } else {
      fd.delete('cf-turnstile-response');
    }

    // Build absolute worker submit URL: prefer workerBaseURL when set (local dev), else site baseURL
    const workerBase = WORKER_BASE_URL_PARAM || SITE_BASE_URL;
    const submitUrl = new URL('/worker/evaluation/submit', workerBase).href;
    fetch(submitUrl, {
      method: 'POST',
      body: fd
    })
    .then(async (res) => {
      const ct = res.headers.get('content-type') || '';
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || ('Request failed: ' + res.status));
      }
      if (ct.includes('application/json')) {
        const json = await res.json();
        const data = json.data || json; // JSON:API or plain
        const attributes = (data && data.attributes) ? data.attributes : data;
        const candidate = (attributes && (attributes['activation-certificate'] || attributes.activationCertificate || attributes.activation_certificate))
          || json.activationCertificate || json.activation_certificate || json.certificate || json.result || '';
        showCertificate(candidate || JSON.stringify(json, null, 2));
      } else {
        const txt = await res.text();
        showCertificate(txt);
      }
      // Optional: reset the widget, but guard prevents re-submission
      resetTurnstile();
    })
    .catch((err) => {
      showAlert(err.message || 'Something went wrong. Please try again.');
      // Keep guard to avoid loops; still reset the widget UI
      resetTurnstile();
    });
  };

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (!certEl.textContent) return;
      navigator.clipboard.writeText(certEl.textContent).then(() => {
        showAlert('Copied to Clipboard. Switch back to SmartGit and paste the license.', 'success');
      }).catch(() => showAlert('Copy failed. Please copy it manually.', 'warning'));
    });
  }

  // Render Turnstile (still render even if disable secret is used, for parity)
  if (typeof turnstile !== 'undefined' && turnstile.ready) {
    turnstile.ready(() => renderTurnstile());
  } else {
    // Fallback if the script is not ready yet
    window.addEventListener('load', () => {
      try { renderTurnstile(); } catch (_) {}
    });
  }

  // Auto-submit if input is present and Turnstile token becomes available (old site behavior)
  const maybeAutoSubmit = () => {
    const hasInput = !!(form.querySelector('#evaluation_input')?.value);
    if (!hasSubmitted && hasInput && cftsToken) {
      submitEvaluation();
    }
  };

  // Hooked auto-submit logic is called from Turnstile callback above.
})();
