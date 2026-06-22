const cartBtn = document.querySelector('.cart');
const closeBtn = document.querySelector('.close-btn');
const cartSidebar = document.querySelector('.cart-sidebar');
const foodMenu = document.querySelector('.menu');
const openMenus = document.querySelectorAll('.open-menu');
const closeMenu = document.querySelector('.close-menu');


cartBtn.addEventListener('click', () => cartSidebar.classList.add('open'));
closeBtn.addEventListener('click', () => cartSidebar.classList.remove('open'));

openMenus.forEach(menu => {
    menu.addEventListener('click', () => foodMenu.classList.add('open'));
});
closeMenu.addEventListener('click',() => foodMenu.classList.remove('open'));