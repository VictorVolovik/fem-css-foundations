const bodyEl = document.body;
const navEl = document.querySelector(".nav");
const menuIconEl = document.querySelector(".header__menu-icon");
const closeIconEl = document.querySelector(".header__close-icon");

menuIconEl.addEventListener("click", function handleMenuIconClick() {
  bodyEl.classList.add("body--no-scroll");
  navEl.classList.add("nav--visible");
  menuIconEl.classList.add("header__menu-icon--hidden");
  closeIconEl.classList.add("header__close-icon--shown");
});

closeIconEl.addEventListener("click", function handleCloseIconClick() {
  bodyEl.classList.remove("body--no-scroll");
  navEl.classList.remove("nav--visible");
  menuIconEl.classList.remove("header__menu-icon--hidden");
  closeIconEl.classList.remove("header__close-icon--shown");
});
