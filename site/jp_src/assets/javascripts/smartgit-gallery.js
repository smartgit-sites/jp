const galleryContainer = document.getElementById('gallery-content');
if(galleryContainer) {
    const galleryModal = new bootstrap.Modal('#galleryModal', {
        keyboard: false
    })

    const galleryItems = galleryContainer.getElementsByClassName('gallery-items');
    console.log(galleryItems);
    const galleryModalElem = document.getElementById('galleryModal');
    const itemContainer = galleryModalElem.getElementsByClassName('carousel-inner')[0];
    const itemIndicators = galleryModalElem.getElementsByClassName('carousel-indicators')[0];
    let i = 0;
    Array.from(galleryItems).forEach(galleryItem => {
        const item = document.createElement('div');
        const indicator = document.createElement('button');

        if(i === 0){
            item.classList.add('active');
            Object.assign(indicator,{
                className: 'active',
                ariaCurrent: true
            });
        }

        item.classList.add('carousel-item');
        //item.appendChild(galleryItem.cloneNode());
        const itemImg = document.createElement('img');
        Object.assign(itemImg,{src: galleryItem.getAttribute('data-img'), alt: galleryItem.getAttribute('data-alt')});
        item.appendChild(itemImg);
        itemContainer.appendChild(item);

        Object.entries({'data-bs-target': '#galleryModalCarousel',  'data-bs-slide-to': i}).forEach(([key, value]) => {indicator.setAttribute(key, value)});
        itemIndicators.appendChild(indicator);

        galleryItem.addEventListener('click', event => {
            galleryModal.show();
        });
        i++;
    });
}