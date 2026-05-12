// Hugo-injected config (via ExecuteAsTemplate)
const TURNSTILE_SITE_KEY = {{ .Site.Params.turnstileSiteKey | jsonify }};
const WORKER_BASE_URL_PARAM = {{ with .Site.Params.workerBaseURL }}{{ . | jsonify }}{{ else }}null{{ end }};
const TURNSTILE_DISABLE_SECRET = {{ with .Site.Params.turnstileDisableSecret }}{{ . | jsonify }}{{ else }}null{{ end }};

const succesStoryForm = document.getElementById('success-story-form');
if(succesStoryForm){
    let stepC = 0;
    let next = false;
    const pages = document.getElementsByClassName('page');
    const btns = document.getElementsByClassName('btn-page');
    const cftsKey = TURNSTILE_SITE_KEY;
    let cftsToken = '';

    const setActive = (stepC, collections) => {
        for(const [x, collection] of collections.entries()) {
            for (const [i, obj] of Array.from(collection).entries()) {
                if (i === parseInt(stepC)){
                    obj.classList.add('active');
                    if (stepC !== 0){
                        obj.scrollIntoView();
                        // send thank you email only first time form is submitted (see worker)
                        const se = document.getElementById('se');
                        if(se)
                            document.getElementById('se').remove();
                    }
                }
                else obj.classList.remove('active');
            }
        }
    }

    const takeStep = (obj, targetCollections) => {
        stepC = obj.getAttribute('data-id');
        setActive(stepC, targetCollections);

    }

    const addListener = (collection, targetCollections) => {
        for(const [i, obj] of Array.from(collection).entries()) {
            obj.addEventListener('click', event => {
                if(stepC < obj.getAttribute('data-id')) {
                    next = false;
                    const promiseForm = submitForm(obj.getAttribute('data-id'));
                    promiseForm.then((xhr) => {
                        document.getElementById('response').innerHTML= '';
                        takeStep(obj, targetCollections);
                        next = true;
                        document.getElementById('wait-for-promise').classList.remove('show');
                    }).catch(xhr => {
                        const txt = xhr.responseText === undefined ? xhr.statusText : xhr.responseText;
                        document.getElementById('response').innerHTML = `<div class="p-3 mb-2 bg-danger text-white overflow-hidden"><i class="fa-solid fa-triangle-exclamation"></i> ${xhr.status} - ${txt}</div>`;
                        document.getElementById('wait-for-promise').classList.remove('show');
                        document.getElementById('response').scrollIntoView();
                    });
                }else{
                    next = true;
                }
                if(next)
                    takeStep(obj, targetCollections);

            });
        }
    }

    const checkValue = (container, types) => {
        let ret = true;
        for (const [t, type] of types.entries()) {
            for (const [j, child] of Array.from(container.getElementsByTagName(type)).entries()) {
                if (child.value === '' && child.getAttributeNode('required')) {
                    ret = false;
                }
            }
        }
        return ret;
    }

    const setBtnState = (collection) => {
        for (const [j, obj] of Array.from(collection).entries()) {
            const btns = obj.getElementsByTagName('button');
            Array.from(btns).forEach(btn => {
                if (cftsToken === '') {
                    Object.assign(btn, {'disabled': true});
                } else {
                    Object.assign(btn, {'disabled': false});
                }
            });
        }
    }

    let widgetId;

    const renderTurnstile = () => {
        cftsToken = turnstile.render("#turnstile-container", {
            sitekey: cftsKey,
            callback: function (token) {
                setBtnState(pages);
            }
        });
    }

    const resetTurnstile = (token) => {
        turnstile.reset(token);
        setBtnState(pages);
    }

    const submitForm = (id) => {
        const form = document.getElementById('success-story-form');
        const container = document.getElementById('page_'+parseInt(id-1));
        const chckVl = checkValue(container, ['input', 'textarea']);
        return new Promise(function(resolve, reject) {
            if (!chckVl) {
                form.classList.add('was-validated');
                reject(new Response('Please fill in all required fields.', {statusText: 'Please fill in all required fields.', status: 422}));
            } else {
                document.getElementById('wait-for-promise').classList.add('show');
                form.classList.remove('was-validated');

                const xhr = new XMLHttpRequest();
                const formData = new FormData(form);
                if (parseInt(stepC) > 0)
                    formData.delete('images');

                // Use disable secret if configured, otherwise use actual Turnstile token
                if (TURNSTILE_DISABLE_SECRET) {
                    formData.set('cf-turnstile-response', TURNSTILE_DISABLE_SECRET);
                }

                // Use workerBaseURL if configured (for local dev), otherwise use form action
                const actionUrl = WORKER_BASE_URL_PARAM
                    ? new URL(form.getAttribute("action"), WORKER_BASE_URL_PARAM).href
                    : form.getAttribute("action");

                xhr.open(form.method, actionUrl);
                xhr.send(formData);

                xhr.onreadystatechange = function(e) {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            resolve(xhr);
                        } else {
                            console.error(xhr);
                            reject(xhr);
                        }
                    }
                };

                resetTurnstile(cftsToken);
            }
        });
    }

    setActive(stepC, [pages]);
    addListener(btns,[pages]);

    turnstile.ready(function () {
        renderTurnstile();
    });
}