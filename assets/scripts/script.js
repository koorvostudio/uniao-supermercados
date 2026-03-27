const menuBtn = document.querySelector(".j_mobile_menu_icon");
const navMenu = document.querySelector('.j_mobile_menu');

menuBtn.addEventListener('click', () => navMenu.classList.toggle('active'));