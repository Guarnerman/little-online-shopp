const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuKart = document.querySelector('.navbar-shopping-kart');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toogleDesktopMenu);
burguerMenu.addEventListener('click', toogleMobileMenu);
menuKart.addEventListener('click', toogleKartAside);

function toogleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  /* mobileMenu.classList.add('inactive'); */
  aside.classList.add('inactive');
}

function toogleMobileMenu() {
  /* desktopMenu.classList.add('inactive'); */
  mobileMenu.classList.toggle('inactive');
  aside.classList.add('inactive');
}

function toogleKartAside() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  aside.classList.toggle('inactive');
}