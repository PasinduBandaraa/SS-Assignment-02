window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const searchForm = document.querySelector('.search-form');
    const cartItem = document.querySelector('.cart-items-container');
    const menuBtn = document.querySelector('#menu-btn');
    const searchBtn = document.querySelector('#search-btn');
    const cartBtn = document.querySelector('#cart-btn');

    if (menuBtn && navbar && searchForm && cartItem) {
        menuBtn.onclick = () => {
            navbar.classList.toggle('active');
            searchForm.classList.remove('active');
            cartItem.classList.remove('active');
        };
    }

    if (searchBtn) {
        searchBtn.onclick = () => {
            searchForm.classList.toggle('active');
            navbar.classList.remove('active');
            cartItem.classList.remove('active');
        };
    }

    if (cartBtn) {
        cartBtn.onclick = () => {
            cartItem.classList.toggle('active');
            navbar.classList.remove('active');
            searchForm.classList.remove('active');
        };
    }

    window.onscroll = () => {
        navbar?.classList.remove('active');
        searchForm?.classList.remove('active');
        cartItem?.classList.remove('active');
    };
});