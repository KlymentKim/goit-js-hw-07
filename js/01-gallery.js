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

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

// Відслідковувати подію кліку на елементі галереї з використанням делегування.Якщо подія відбувається на елементі 
// з класом gallery__image,
// необхідно запобігти дії за замовчуванням та отримати URL оригінального зображення з атрибута data - source.

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();

  const galleryImageEl = event.target;
  if (galleryImageEl.nodeName !== 'IMG' || !galleryImageEl.classList.contains('gallery__image')) {
    return;
  }

  const originalImageUrl = galleryImageEl.dataset.source;
  openModal(originalImageUrl);
}


// Підключити до HTML-сторінки мініфіковані файли бібліотеки basicLightbox за допомогою CDN-сервісу jsdelivr.

// <!-- Підключення стилів бібліотеки basicLightbox -->
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox/dist/basicLightbox.min.css">

// <!-- Підключення скрипту бібліотеки basicLightbox -->
// <script src="https://cdn.jsdelivr.net/npm/basiclightbox/dist/basicLightbox.min.js"></script>

// Створити функцію openModal, яка відкриває модальне вікно з оригінальним зображенням.Функція повинна замінити значення атрибута 
// src у вбудованому зображенні на URL оригінального зображення та відкрит