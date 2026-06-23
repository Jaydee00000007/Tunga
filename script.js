const meals = [
    { id: 1, name: "Wireless Headphones", price: 99.99, image: },
    { id: 2, name: "Smart Watch", price: 149.99 },
    { id: 3, name: "Mechanical Keyboard", price: 79.99 },
    { id: 4, name: "Gaming Mouse", price: 49.99 }
];










const cartBtn = document.querySelector('.cart');
const closeBtn = document.querySelector('.close-btn');
const cartSidebar = document.querySelector('.cart-sidebar');
const foodMenu = document.querySelector('.menu');
const openMenus = document.querySelectorAll('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const restMeals = document.getElementById('fd-s');
const restMenus = document.querySelector('.rmenu');


cartBtn.addEventListener('click', () => cartSidebar.classList.add('open'));
closeBtn.addEventListener('click', () => cartSidebar.classList.remove('open'));

openMenus.forEach(menu => {
    menu.addEventListener('click', () => foodMenu.classList.add('open'));
});
closeMenu.addEventListener('click',() => foodMenu.classList.remove('open'));


function displayMenus() {
    restMenus.innerHTML = ""; // Clear current grid container text
    menus.forEach(menu => {
        const restMeals = document.createElement('div');
        restMeals.classList.add('product-card');
        restMeals.innerHTML = `
            <img src="${meal.image}" alt="">
            <div class="fname">${meal.name}</div>
            <span class="fprice">$${meal.price.toFixed(2)}</span>
            <div class="addbtn"><button class="add-to-cart-btn" onclick="addToCart(${meal.id})>Add to cart</button></div>
`;
        restMenus.appendChild(restMeals);
    });
}