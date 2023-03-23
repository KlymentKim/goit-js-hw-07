import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line

const ul = document.querySelector('.gallery');
console.log(ul);
const gallery = galleryItems.reduce((acc, { preview, original, description }) =>
acc + `<li><img src = "${preview}", "${original}", alt = "${description}"</li>`,'');

 ul.insertAdjacentHTML(`beforeend`, gallery);


// const instance = basicLightbox.create(
//     // `<img src="assets/images/image.png" width="800" height="600">`)
//     // document.querySelector()
// ).show();


