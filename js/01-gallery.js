import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createMarkUp(galleryItems));
let instance = null;

list.addEventListener("click", handleClick);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && instance) {
    instance.close();
  }
});
function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const modalImg = event.target.dataset.source;
  instance = basicLightbox.create(`
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
