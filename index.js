const popup_image = document.querySelector(".popup-image");
const popup_image_img = document.querySelector(".popup-image img");
const images = document.querySelectorAll(".image");
const close = document.querySelector(".popup-image span");

images.forEach((image) => {
  image.addEventListener("click", () => {
    popup_image.style.display = "block";
    let clicked_image = image.getElementsByTagName("img")[0].src;
    popup_image_img.src = clicked_image;
  });
});

close.addEventListener("click", () => {
  popup_image.style.display = "none";
});
