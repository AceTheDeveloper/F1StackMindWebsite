const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

let isOpen = false;

menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
        navMenu.classList.remove('opacity-0', 'scale-y-0', 'invisible');
        navMenu.classList.add('opacity-100', 'scale-y-100', 'visible');
    } else {
        navMenu.classList.remove('opacity-100', 'scale-y-100', 'visible');
        navMenu.classList.add('opacity-0', 'scale-y-0', 'invisible');
    }
});