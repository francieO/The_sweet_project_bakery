const homeMenuOverlays = document.querySelectorAll(".home-menu-overlay");
// const homeMenuContainer = document.querySelector(".home-menu-container");
// console.log(homeMenuContainer);
const homeMenuItems = document.querySelectorAll(".js-home-menu-item");
const homeMenuImageHOver = document.querySelectorAll(".home-menu-image-hover");

// overlay.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("hello");
//     homeMenuItems.classList.add("img-effect");
//   });
// });

// overlays.forEach((overlay) => {
//   overlay.addEventListener("click", () => {
//     homeMenuItems.forEach((item));
//     item.classList.add("img-effect");
//   });
// });

homeMenuOverlays.forEach((overlay) => {
  overlay.addEventListener("mouseover", (e) => {
    console.log(e.target.parentNode.children);
    e.target.parentNode.children[0].classList.add("js-home-menu-image-hover");

    e.target.parentNode.children[1].children[1].classList.remove(
      "js-hide-button"
    );
    const button = e.target.parentNode.children[1].children[1];
    console.log(button);
    e.target.parentNode.children[1].children[1].classList.add("show-button");
    button.addEventListener("transitionend", () => {
      button.remove();
    });
  });
});

homeMenuOverlays.forEach((overlay) => {
  overlay.addEventListener("mouseout", (e) => {
    console.log(e.target.parentNode.children);
    e.target.parentNode.children[0].classList.remove(
      "js-home-menu-image-hover"
    );

    e.target.parentNode.children[1].children[1].classList.add("js-hide-button");
    console.log(e.target.parentNode.children[1].children[1]);
  });
});
