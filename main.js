const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuKart = document.querySelector('.navbar-shopping-kart');
const shoppingKartContainer = document.querySelector('.product-kart-detail')
const productDetailContainer = document.querySelector('.product-detail-info')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container');
const darked = document.querySelector('.dark')

menuEmail.addEventListener('click', toogleDesktopMenu);
burguerMenu.addEventListener('click', toogleMobileMenu);
menuKart.addEventListener('click', toogleKartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toogleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  /* mobileMenu.classList.add('inactive'); */
  shoppingKartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  
  !desktopMenu.classList.contains('inactive') ? darked.classList.remove('inactive') : darked.classList.add('inactive');
}

function toogleMobileMenu() {
  /* desktopMenu.classList.add('inactive'); */
  mobileMenu.classList.toggle('inactive');
  shoppingKartContainer.classList.add('inactive');

  !mobileMenu.classList.contains('inactive') ? darked.classList.remove('inactive') : darked.classList.add('inactive');
}

function toogleKartAside() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  shoppingKartContainer.classList.toggle('inactive');
  productDetailContainer.classList.add('inactive');

  !shoppingKartContainer.classList.contains('inactive') ? darked.classList.remove('inactive') : darked.classList.add('inactive');
}

function openProductDetailAside() {
  desktopMenu.classList.add('inactive');
  shoppingKartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
  
  !productDetailContainer.classList.contains('inactive') ? darked.classList.remove('inactive') : darked.classList.add('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
  darked.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'image',
  price: 120,
  image: 'https://picsum.photos/seed/picsd/200/300',
});
productList.push({
  name: 'image 2',
  price: 100,
  image: 'https://picsum.photos/seed/picsv/200/300',
});
productList.push({ 
  name: 'image 3',
  price: 240,
  image: 'https://picsum.photos/seed/picum/200/300',
});
productList.push({ 
  name: 'image 4',
  price: 170,
  image: 'https://picsum.photos/seed/picweum/200/300',
});
productList.push({ 
  name: 'image 5',
  price: 400,
  image: 'https://picsum.photos/seed/picffwum/200/300',
});
productList.push({ 
  name: 'image 6',
  price: 310,
  image: 'https://picsum.photos/seed/piwefum/200/300',
});

function renderProducts(arr) {
  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgKart = document.createElement('img');
    productImgKart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgKart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard); 
  }
}

renderProducts(productList);