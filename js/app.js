
const hamburger = document.getElementById('hamburger');
const body = document.querySelector('body');
const mobileMenu = document.getElementById('mobile-menu');
const heroSection = document.getElementById('hero');
const controllerImg = document.getElementById('controller-image');
const controllerBg = document.getElementById('controller-bg');
const formSection = document.getElementById('form');
const toFormBtn = document.getElementById('to-form');
const dropdown = document.getElementById('drop-on');
const dropdownBody = document.getElementById('dropdown-body');



let complectName = document.getElementsByClassName('mobile-complect__name');
let complectBody = document.getElementsByClassName('mobile-complect__dropdown');

hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('mobile__menu_active');
    hamburger.classList.toggle('header__hamburger_active');
    body.classList.toggle('menu-active');
})


dropdown.onmouseover = () => {
    dropdownBody.style.display = 'block'
};
dropdown.onmouseout = () => {
    dropdownBody.style.display = 'none'
};



const accordions = document.querySelectorAll(".mobile-complect__block");

const openAccordion = (accordion) => {
    const content = accordion.querySelector(".mobile-complect__dropdown");
    const arrow = accordion.querySelector(".mobile-complect__name>img");
    setTimeout(() => {
        accordion.classList.add("mobile-complect__dropdown_active");
    }, 100);
    content.style.maxHeight = content.scrollHeight + "px";
    arrow.style.transform = 'rotateZ(180deg)';
};

const closeAccordion = (accordion) => {
    const content = accordion.querySelector(".mobile-complect__dropdown");
    const arrow = accordion.querySelector(".mobile-complect__name>img");
    accordion.classList.remove("mobile-complect__dropdown_active");
    content.style.maxHeight = null;
    arrow.style.transform = 'rotateZ(0deg)';
};

accordions.forEach((accordion) => {
    const intro = accordion.querySelector(".mobile-complect__name");
    const content = accordion.querySelector(".mobile-complect__dropdown");

    intro.onclick = () => {
        if (content.style.maxHeight) {
            closeAccordion(accordion);
        } else {
            accordions.forEach((accordion) => closeAccordion(accordion));
            openAccordion(accordion);
        }
    };
});

$(function () {
    $("a[href*=#]").click(function () {
        $("html:not(:animated),body:not(:animated)")
            .animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 500);
        return false;
    });
});

function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
}

toFormBtn.addEventListener('click', () => {
    scrollTo(formSection);
});
