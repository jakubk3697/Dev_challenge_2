const mainNav = document.getElementById('mainNav');

let prevScrollPos = window.scrollY;

window.onscroll = () => {
    const currentScrollPos = window.scrollY;

    if(prevScrollPos > currentScrollPos) {
        document.querySelector('.mainNav').classList.add('scrollingTop');
    } else {
        document.querySelector('.mainNav').classList.remove('scrollingTop');
    }

    prevScrollPos = currentScrollPos;
}