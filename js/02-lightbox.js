import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
console.log(galleryItems);
// Change code below this line
//const gallery = document.querySelector('.gallery a');
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    closeBtnCaption: 'Close',
    nextBtnCaption: 'Next',
    prevBtnCaption: 'Previous',
    loadingCaption: 'Loading...',
});

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description}) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
}
gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));
