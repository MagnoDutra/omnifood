const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".btn-mobile-nav");

menuBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
