// const mainNav = document.getElementById('mainNav');

// let prevScrollPos = window.scrollY;

// window.onscroll = () => {
//     const currentScrollPos = window.scrollY;

//     if(prevScrollPos > currentScrollPos) {
//         document.querySelector('.mainNav').classList.add('scrollingTop');
//     } else {
//         document.querySelector('.mainNav').classList.remove('scrollingTop');
//     }

//     prevScrollPos = currentScrollPos;
// }

const popupBtn = document.querySelector('.mainNav__bar');
const popupIco = document.querySelector('.mainNav__bar i');

const links = document.querySelector('.mainNav__links');
const navLink = [...document.querySelectorAll('.mainNav__link')];

const showLinks = () => {
    links.classList.toggle('linksOpened');
    popupIco.classList.toggle('fa-bars');
    popupIco.classList.toggle('fa-times');
}

navLink.forEach(link => {
    link.addEventListener('click',showLinks);
})

popupBtn.addEventListener('click', showLinks);
