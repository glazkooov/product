const burger = document.querySelector('.burger');
const menu = document.querySelector('.mobile-menu');
const nav_links = document.querySelectorAll('.nav-mobile a');

burger.addEventListener('click', () => {
menu.classList.toggle('active');
burger.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
        burger.classList.remove('active');
    }

})


nav_links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
      menu.classList.remove('active');
      burger.classList.remove('active');
    });
  });


const swiper = new Swiper('.strategies_swiper', {
    wrapperClass: 'strategies_swiper-wrapper', // вместо .swiper-wrapper
    slideClass: 'strategies_swiper-slide',     // вместо .swiper-slide

    // Отключаем стандартное поведение слайдера
    freeMode: true,          // Свободная прокрутка без привязки к слайдам
    slidesPerView: 'auto',   // Автоматическое определение видимых слайдов
    spaceBetween: 30,        // Отступ между элементами
    // Отключаем ненужные элементы
    navigation: false,
    pagination: false,
});


const swiper1 = new Swiper('.price_swiper', {
    wrapperClass: 'price_swiper-wrapper', // вместо .swiper-wrapper
    slideClass: 'price_swiper-slide',     // вместо .swiper-slide

    // Отключаем стандартное поведение слайдера
    freeMode: true,          // Свободная прокрутка без привязки к слайдам
    slidesPerView: 'auto',   // Автоматическое определение видимых слайдов
    spaceBetween: 30,        // Отступ между элементами
    // Отключаем ненужные элементы
    navigation: false,
    pagination: false,
});


const swiper2 = new Swiper('.clients_swiper', {
    wrapperClass: 'clients_swiper-wrapper', // вместо .swiper-wrapper
    slideClass: 'clients_swiper-slide',     // вместо .swiper-slide

    // Отключаем стандартное поведение слайдера
    freeMode: true,          // Свободная прокрутка без привязки к слайдам
    slidesPerView: 'auto',   // Автоматическое определение видимых слайдов
    spaceBetween: 30,        // Отступ между элементами
    // Отключаем ненужные элементы
    navigation: false,
    pagination: false,
});


const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));





function typeWriterEffect(element, text, speed = 50) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    element.innerHTML = "";
    type();
}

document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".start-page_title");
    typeWriterEffect(title, "Work at the speed of thought");
});




