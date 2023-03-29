import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// Change code below this line
 const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    // closeBtnCaption: 'Close',
    // nextBtnCaption: 'Next',
    // prevBtnCaption: 'Previous',
    // loadingCaption: 'Loading...',
        });

// Go to next image
lightbox.next();

// Go to previous image
lightbox.prev();

// Close lightbox
lightbox.close();

// Destroy lightbox (does close and removes all $items click handlers)
lightbox.destroy();

// Open lightbox
lightbox.show();

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
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
  }).join("");
}
// Add gallery items to the DOM
lightbox.insertAdjacentHTML('beforeend', createGalleryMarkup);

lightbox.addEventListener('click', onGalleryContainerClick);


//check for image 
function onGalleryContainerClick(event) {
    event.preventDefault();
       
    const isGalleryImage = event.target;
    if (isGalleryImage.nodeName !== 'IMG' || !isGalleryImage.classList.contains('gallery-image')) {
        return;
    }

     

  

}

