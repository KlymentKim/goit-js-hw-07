import { galleryItems } from './gallery-items.js';
// console.log(galleryItems);
// Change code below this line

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
   
    const isGalleryImage = event.target;

     // перевірка якщо це фото
    if (isGalleryImage.nodeName !== 'IMG' || !isGalleryImage.classList.contains('gallery-image')) {
        return;
    }
    
    const imageSet = event.target.dataset.source;
    // відкриття картинки на повний єкран бібліотека Lightbox
  const instance = basicLightbox.create(`
    <img src="${imageSet}" alt="${isGalleryImage.alt}" />`, {

  });
  instance.show();

    // Close modal window on Escape key press
  document.addEventListener("keydown", (event) => {
       if (event.key == 'Escape')
        instance.close();
  });
}