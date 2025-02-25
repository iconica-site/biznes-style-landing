// Слайдер "Выберите подходящий номинал"
const swiper = new Swiper('.swiper-with-cards', {
    slidesPerView: 'auto',
    spaceBetween: -45,
    centeredSlides: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
    },
    loop: true,
    effect: 'slide',
});

// Слайдер "Отзывы"
const swiperReviews = new Swiper('.swiper-container-reviews', {
    slidesPerView: 'auto',
    spaceBetween: -65,
    centeredSlides: true,
    loop: true,
    speed: 600, 
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
});

// FAQ
document.querySelectorAll('.faq-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

// DIGIFT
document.addEventListener("DOMContentLoaded", function() { 
    IframeWidgetFunctional.init('.js_iframe_widget'); 
});

// MOBILE BURGER
const burger = document.querySelector('.mobile-burger');
const burgerMenu = document.querySelector('.mobile-burger-open');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});