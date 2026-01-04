const dropZone = document.getElementById('drop_zone');
const fileUploader = document.getElementById('attachment');
const fileNameContainer = document.getElementById('file_name');
const delBtn = document.getElementById('remove_attachment');
let fileNames = [];
const validateFileType = (fileObj) => {
    //const acceptedTypes = ['pdf'];
    const acceptedTypesLong = ['application/pdf'];
    for (const[key, value] of Object.entries(fileObj)) {
        const nameExtension = value.name.split('.').pop();
        /*if (!acceptedTypes.includes(nameExtension)) {
            fileUploader.value = null;
            alert('ERROR: Only PDF files are allowed!');
            return false;
        }
        if (!acceptedTypesLong.includes(value.type)) {
            fileUploader.value = null;
            alert('ERROR: Only PDF files are allowed!');
            return false;
        }*/
        fileNames.push(value.name);
    }
    return true;
};

if(fileUploader) {
    fileUploader.addEventListener('change', (event) => {
        window.selectedFile = event.target.files;
        fileNameContainer.innerHTML = (!validateFileType(window.selectedFile)) ? '' : fileNames.join(', ');
    });

    delBtn.addEventListener('click', event => {
        event.stopPropagation();
        event.preventDefault();
        const dt = new DataTransfer();
        fileUploader.value = '';
        fileNames = [];
        fileNameContainer.innerHTML = '';
        window.selectedFile = dt.files;
        window.FileList = dt.files;
    });

    if (window.FileList && window.File) {
        document.addEventListener('dragover', event => {
            dropZone.classList.add('show');
            event.stopPropagation();
            event.preventDefault();

            // Adding a visual hint that the file is being copied to the window
            event.dataTransfer.dropEffect = 'copy';
        });

        document.addEventListener("dragleave", event => {
            dropZone.classList.remove('show');
        });


        document.addEventListener('drop', event => {
            dropZone.classList.remove('show');
            event.stopPropagation();
            event.preventDefault();

            const files = event.dataTransfer.files;
            window.selectedFile = files;
            fileNameContainer.innerHTML = (!validateFileType(window.selectedFile)) ? '' : fileNames.join(', ');
        });
    }
}

const contactForm = document.getElementById('contact-form');
if(contactForm){
    let stepC = 0;
    let next = false;
    const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
    const pages = document.getElementsByClassName('page');
    const btns = document.getElementsByClassName('btn-page');
    const cftsKey = '0x4AAAAAAA5ppOVQRpTnVn7s'
    let cftsToken = '';

    const scrollToFormPage = (el) => {
        const nav = document.getElementById('main-nav');
        const gap = 16;
        const offset = (nav ? nav.offsetHeight : 0) + gap;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({top: y});
    };

    const setActive = (stepC, collections) => {
        for(const [x, collection] of collections.entries()) {
            for (const [i, obj] of Array.from(collection).entries()) {
                if (i === parseInt(stepC)){
                    obj.classList.add('active');
                    if (stepC !== 0){
                        scrollToFormPage(obj);
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
                        document.getElementById('response').innerHTML = `<div class="p-3 mb-2 bg-danger text-white overflow-hidden"><i class="fa-light fa-triangle-exclamation"></i> ${xhr.status} - ${txt}</div>`;
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
        const form = document.getElementById('contact-form');
        const container = document.getElementById('page_'+parseInt(id-1));
        const chckVl = checkValue(container, ['input', 'textarea']);
        return new Promise(function(resolve, reject) {
            if (!chckVl) {
                form.classList.add('was-validated');
                reject(new Response('Please fill in all required fields.', {statusText: 'Please fill in all required fields.', status: 422}));
            } else {
                document.getElementById('wait-for-promise').classList.add('show');
                form.classList.remove('was-validated');
                /*
                for local tests so we do not need to send emails
                 */
                console.info('isLocal: '+isLocal);
                if (isLocal) {
                    let emailBody = '';
                    let emailBodyHead = '';
                    let formData = new FormData(form);
                    for (const [k, v] of formData) {
                        console.debug('typeof value: '+typeof v);
                        console.debug('key: '+k.includes('attachment'));
                        if (typeof v === 'string')
                            if (!k.includes('exclude_') && !k.includes('cf-turnstile'))
                                emailBody += `${k}:\n${v}\n\n`;
                        if(typeof  v === 'object' && k.includes('attachment')){
                            emailBody += `---\n\nMaybe files attached`;
                        }

                    }
                    if (emailBodyHead.length > 0) {
                        emailBody = `---\n${emailBodyHead}---\n\n${emailBody}`;
                    }
                    console.log(emailBody);
                    resolve(new Response(emailBody, {status: 200}));
                } else {
                    const xhr = new XMLHttpRequest();
                    const formData = new FormData(form);
                    xhr.open(form.method, form.getAttribute("action"));
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
            }
        });
    }

    setActive(stepC, [pages]);
    addListener(btns,[pages]);

    if(!isLocal) {
        turnstile.ready(function () {
            renderTurnstile();
        });
    }
}