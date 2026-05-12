async function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

document.addEventListener("DOMContentLoaded", function () {
    let os;
    const platform = navigator.platform.toLowerCase();

    if (platform.includes('win')) {
        os = 'windows';
    } else if (platform.includes('mac')) {
        os = 'mac_os';
    } else if (platform.includes('linux')) {
        os = 'linux';
    }

    if (os) {
        document.querySelectorAll('.download-os-frame[data-os="' + os + '"]').forEach(frame => {
            frame.classList.add('download-highlight');
        });
    }

    document.querySelectorAll('details[data-js-collapse]').forEach(detail => {
        detail.removeAttribute('open');
    });

    document.querySelectorAll('[data-copy-text]').forEach(button => {
        button.addEventListener('click', async event => {
            event.preventDefault();
            event.stopPropagation();
            button.blur();

            const originalLabel = button.textContent.trim();

            try {
                await copyText(button.dataset.copyText);
                button.textContent = button.dataset.copiedLabel || 'Copied';
            } catch (err) {
                console.error('Failed to copy text: ', err);
                button.textContent = 'Copy failed';
            }

            window.setTimeout(() => {
                button.textContent = originalLabel;
            }, 1600);
        });
    });
});
