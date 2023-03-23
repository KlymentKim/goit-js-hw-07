import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox';
// Change code below this line
// const basicLightbox = require('basiclightbox');

const ul = document.querySelectorAll('ul.gallery');
console.log(ul);



const instance = basicLightbox.create(
    // `<img src="assets/images/image.png" width="800" height="600">`)
    // document.querySelector()
)
instance.show()

console.log(galleryItems);
