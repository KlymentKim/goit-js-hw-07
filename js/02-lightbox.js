import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line
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


//check for image 
function onGalleryContainerClick(event) {
    event.preventDefault();
       
    const isGalleryImage = event.target;
    if (isGalleryImage.nodeName !== 'IMG' || !isGalleryImage.classList.contains('gallery-image')) {
        return;
    }

        // const gallery = new SimpleLightbox('.gallery a', {
        // captions: true,
        // captionDelay: 250,
        // });


}
