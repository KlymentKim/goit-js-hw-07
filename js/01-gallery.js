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

const gallery = document.querySelector('.gallery');

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
// Add gallery items to the DOM
gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

gallery.addEventListener('click', onGalleryContainerClick);


function onGalleryContainerClick(event) {
     event.preventDefault();
    //блокування ввідкриття браузером силки 
    // event.blockStandartAction();

    const isGalleryImage = event.target;
    if (isGalleryImage.nodeName !== 'IMG' || !isGalleryImage.classList.contains('gallery-image')) {
        return;
    }
    
    const imageSet = event.target.dataset.source;
    // відкриття картинки на повний єкран бібліотека Lightbox
    const instance = basicLightbox.create(`
    <img src="${imageSet}" alt="${isGalleryImage.alt}" width = "900"
    heigth="700"/>
    `);
    instance.show();
  }
    // Close modal window on Escape key press
    gallery.addEventListener("Keydown", (event) => {
      const instance = basicLightbox.getInstance();
        if (event.key === "Escape" && instance.visible()) {
            instance.close();
        }
    });
