// smooth-scroll.js
// Плавная прокрутка колесом (Lenis). Якорные ссылки — нативные (мгновенные).

(function () {
    'use strict';

    // ===== Проверяем, загрузился ли Lenis =====
    if (typeof Lenis === 'undefined') {
        console.warn('Lenis не загружен — плавная прокрутка отключена.');
        return;
    }

    // ===== Не включаем на мобильных =====
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    // ===== Инициализация Lenis =====
    const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
    });

    // ===== Цикл анимации =====
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ===== Кнопка «Наверх» (если есть) =====
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            lenis.scrollTo(0, { duration: 1.2 });
        });
    }

    // ===== Отключаем Lenis при открытии мобильного сайдбара =====
    const aside = document.querySelector('aside');
    if (aside) {
        const observer = new MutationObserver(() => {
            if (aside.classList.contains('open')) {
                lenis.stop();
            } else {
                lenis.start();
            }
        });
        observer.observe(aside, { attributes: true, attributeFilter: ['class'] });
    }

    // ===== Экспортируем lenis в window =====
    window.lenis = lenis;
})();