const menuBtn = document.querySelector(".j_mobile_menu_icon");
const navMenu = document.querySelector('.j_mobile_menu');
const menuLinks = document.querySelectorAll('.j_mobile_menu a');
const header = document.querySelector('.j_header');

export const ChangeHeaderBehavior = () => {
    window.scrollY > 50 ? header.classList.add('scrolling') : header.classList.remove('scrolling');
};

export default function Header() {
    ChangeHeaderBehavior();
    menuBtn.addEventListener('click', () => navMenu.classList.toggle('active'));

    menuLinks.forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
}