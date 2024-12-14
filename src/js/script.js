// 頁面
const allSection = document.querySelectorAll('.section');
const wrap = document.querySelector('.wrap');
const index__wrap = document.querySelector('.index__wrap');
const text__title = document.querySelector('.text__title');

const about = document.querySelector('.about');

// header / nav
const header = document.querySelector('.header');
const nav = document.querySelectorAll('.nav__item');

// 物件
const arrow = document.querySelector('.icon__arrow');

// 設定index滑下的放大變換 ======================================================

// 當瀏覽器視窗與目標開使相交便會執行indexopen funtion
const obsOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-90px',
};

const indexOpen = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) {
        wrap.classList.add('active');
        index__wrap.classList.add('active');
        header.classList.add('sticky');
        arrow.classList.add('hidden');
        allSection.forEach(section => section.classList.add('active'));
    } else {
        wrap.classList.remove('active');
        index__wrap.classList.remove('active');
        header.classList.remove('sticky');
        arrow.classList.remove('hidden');
        allSection.forEach(section => section.classList.remove('active'));
    }
};

// 目標about(當進入到第二頁觸發的事件)
const observer = new IntersectionObserver(indexOpen, obsOptions);
observer.observe(text__title);

// close ======================================================================
const topBtn = document.querySelector('.header__close');

topBtn.addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// 設定nav不同頁切換active ======================================================

$(document).ready(function () {
    // 隨著滾輪移動到相對應的頁數
    $(window).scroll(function () {
        if ($(window).scrollTop() < $('.about').offset().top - 300) {
            $('.nav__item').removeClass('nav__item--active');
        } else if ($(window).scrollTop() >= $('.about').offset().top - 300 && $(window).scrollTop() < $('.skill').offset().top - 200) {
            $('.nav__item').removeClass('nav__item--active');
            $('.nav__item:eq(0)').addClass('nav__item--active');
        } else if ($(window).scrollTop() >= $('.skill').offset().top - 200 && $(window).scrollTop() < $('.portfolio').offset().top - 200) {
            $('.nav__item').removeClass('nav__item--active');
            $('.nav__item:eq(1)').addClass('nav__item--active');
        } else if ($(window).scrollTop() >= $('.portfolio').offset().top - 200) {
            $('.nav__item').removeClass('nav__item--active');
            $('.nav__item:eq(2)').addClass('nav__item--active');
        }
    });
});

// =========================================
