const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
menuToggle.addEventListener("click", function() {
  siteNav.classList.toggle("site-nav--open");
  this.classList.toggle("menu-toggle--open");
});

console.log(menuToggle);
