const bsBreakPoints = {'equal-height-item':0,'equal-height-item-sm':576,'equal-height-item-md':768,'equal-height-item-lg':992,'equal-height-item-xl':1200,'equal-height-item-xxl':1400};

function setEqualHeightItems() {
    const containers = document.querySelectorAll('.equal-height-container');
    const viewportWidth = window.innerWidth;
    let doResize = false

    containers.forEach(container => {
        const items = container.querySelectorAll('[class*="equal-height-item"]');
        let maxHeight = 0;

        items.forEach(item => {
            item.style.height = 'auto'; // Reset first
            const height = item.offsetHeight;
            if (height > maxHeight) maxHeight = height;
        });

        items.forEach(item => {
            console.log(item);
            const matchedClass = [...item.classList].find(cls => {
                    doResize = bsBreakPoints.hasOwnProperty(cls) ? window.innerWidth >= bsBreakPoints[cls] : false;
                    return bsBreakPoints.hasOwnProperty(cls);
                }
            );
            console.log(matchedClass);
            if (matchedClass && doResize) {
                item.style.height = `${maxHeight}px`;
            } else {
                item.style.height = 'auto';
            }
        });
    });
}

// Run on load
window.addEventListener('load', setEqualHeightItems);
// Optional: run on resize
window.addEventListener('resize', setEqualHeightItems);