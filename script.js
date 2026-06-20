const cartBtn = document.querySelector('.cart');
const closeBtn = document.querySelector('.close-btn');
const cartSidebar = document.querySelector('.cart-sidebar');


cartBtn.addEventListener('click', () => cartSidebar.classList.add('open'));
closeBtn.addEventListener('click', () => cartSidebar.classList.remove('open'));
