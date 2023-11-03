import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createMarkUp(galleryItems));
list.addEventListener("click", handleClick);
function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const modalImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${modalImg}" width="800" height="600">
`);

  instance.show();
}
function createMarkUp(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  					<a class="gallery__link" href="${original}">
    					<img
      				class="gallery__image"
      				src="${preview}"
      				data-source="${original}"
     				 alt="${description}"
    				/>
  				</a>
				</li>`
    )
    .join("");
}
console.log(galleryItems);
