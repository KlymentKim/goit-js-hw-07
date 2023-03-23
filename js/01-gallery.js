import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line

// const ul = document.querySelector('.gallery');
// console.log(ul);
// const gallery = galleryItems.reduce((acc, { preview, original, description }) =>
// acc + `<li><img src = "${preview}", "${original}", alt = "${description}"</li>`,'');

//  ul.insertAdjacentHTML(`beforeend`, gallery);


// const instance = basicLightbox.create(
//     // `<img src="assets/images/image.png" width="800" height="600">`)
//     // document.querySelector()
// ).show();


// Створити функцію для рендерингу розмітки на основі масиву даних galleryItems 
// та шаблону елемента галереї.Функція повинна додати розмітку до елементу з класом gallery на сторінці.

const ul = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items.reduce((acc, { preview, original, description }) => {
    return acc + `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  },'');
}
// add array images to html
ul.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));


ul.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();
    //блокування ввідкриття браузером силки 
    event.blockStandartAction();

    const isGalleryImage = event.target;
    if (isGalleryImage.nodeName !== 'IMG' || !isGalleryImage.classList.contains('gallery-image')) {
        return;
    }
    

    const imageSet = event.target.dataset.source;
    // відкриття картинки на повний єкран бібліотека Lightbox
    const instance = basiclightbox.create(
        `<img src= "${imageSet}" width="800" heigth="600"`
    );
    instance.show();
}