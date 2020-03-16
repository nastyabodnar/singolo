let nav        = document.querySelector('.nav-bar'),
    navLinks   = document.querySelectorAll('.navigation__link')
    slider     = document.querySelector('.slider'),
    slides     = [...document.querySelectorAll('.slider__list')],
    arrows     = document.querySelectorAll('.slider__arrow'),
    portNavTags    = document.querySelector('.portfolio__tags'),
    portTag  = document.querySelectorAll('.portfolio__tag'),
    portImages = document.querySelectorAll('.portfolio__image > img'),
    submit     = document.getElementById('submit'),
    closeBtn   = document.querySelector('.close-btn') 
    position   = ['-1020px','1020px']

nav.addEventListener('click', e => {
    let target = e.target
        if(target.tagName != 'A') return

        navLinks.forEach(el => el.classList.remove('link-active'))
        target.classList.add('link-active')
}) 

// slider
const SLIDES = document.querySelectorAll('#slides .slide');
const SLIDER_SECTION = document.getElementById('slider-section');
const SLIDER_ARROW = document.getElementsByClassName('slider__arrow');
var currentSlide = 0;

const slider = () => {
    SLIDES[currentSlide].className += 'slide';
    currentSlide = (currentSlide + 1) % SLIDES.length;
    if (SLIDES[currentSlide].classList.contains('blue')) {
        SLIDER_SECTION.style.backgroundColor = '#648bf0';
        SLIDER_SECTION.style.borderBottomColor = '#5173cb';
        SLIDES[currentSlide].className += ' showing';
    } else {
        // SLIDER_SECTION.style.transition = 'ease-out 0.2s';;
        SLIDER_SECTION.style.backgroundColor = '#f06c64';
        SLIDER_SECTION.style.borderBottomColor = '#ea676b';
        SLIDES[currentSlide].className += ' showing';
    }
}

// lock phone
const PHONE_WALLPAPER = document.getElementsByClassName('slider__img');
const delWallpapaer = () => {
    let elem = this.event.target;
    if (elem.classList.contains('none'))
        elem.classList.remove('none')
    else
        elem.classList.add('none');
}

// portfolio navigation
NAVIGATION.addEventListener('click', (event) => {
    NAVIGATION.querySelectorAll('a').forEach(item => {
        item.classList.remove('link-active');
    });
    event.target.classList.add('link-active');
})

// portfolio random image
const PORTFOLIO_TAG = document.getElementById('portfolio__tag');
const PORTFOLIO_IMAGES = document.getElementById('portfolio__images');

const randomImages = (event) => {
    let target = event.target;
    if (target.tagName == 'a') {

        PORTFOLIO_TAG.querySelectorAll('a').forEach(item => {
            item.classList.remove('tag_selected');
        });
        target.classList.add('tag_selected');

        let srcArray = [];
        PORTFOLIO_IMAGES.querySelectorAll('img').forEach(item => {
            srcArray.push(item.src);
            item.src = '';
        })

        let randArray = srcArray.sort(function() {
            return Math.random() - 0.5;
        });

        PORTFOLIO_IMAGES.querySelectorAll('img').forEach((item, index) => {
            item.src = randArray[index];
        })
    }
}

// portfolio active image
PORTFOLIO_IMAGES.addEventListener('click', event => {
    let target = event.target;
    if (target.tagName == 'IMG') {
        PORTFOLIO_IMAGES.querySelectorAll('img').forEach(item => {
            item.style.boxShadow = "none";
        });
        event.target.style.boxShadow = "0px 0px 0px 2px rgba(255,0,0,1)";
    }
})

//modal window
const MODAL_WINDOW = document.getElementById('modal-window');
const MODAL_BUTTON = document.getElementById('modal-button');
const MODAL_SUBMIT = document.getElementById('modal-submit');

const FORM = document.getElementById('form');
const NAME_INPUT = document.getElementById('name');
const EMAIL_INPUT = document.getElementById('email');
const TEXT_INPUT = document.getElementById('txt');
const DESCR_INPUT = document.getElementById('description');

const closeModal = (event) => {
    if (event.target.tagName == "SECTION" || event.target.tagName == "BUTTON") {
        MODAL_WINDOW.classList.add('display-none');
        let added = document.getElementById('added');
        MODAL_SUBMIT.removeChild(added);
        FORM.reset();
    }
}

