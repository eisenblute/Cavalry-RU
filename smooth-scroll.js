// smooth-scroll.js
// Плавная прокрутка страницы + обработка якорных ссылок

(function () {
    'use strict';

    // ===== Проверяем, загрузился ли Lenis =====
    if (typeof Lenis === 'undefined') {
        console.warn('Lenis не загружен — плавная прокрутка отключена.');
        return;
    }

    // ===== Не включаем на мобильных (там нативный скролл удобнее) =====
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    // ===== Инициализация Lenis =====
    const lenis = new Lenis({
        duration: 1.1,                    // длительность «догона» в секундах
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,                // плавное колесо
        smoothTouch: false,               // тач — нативный
        wheelMultiplier: 1,               // чувствительность колеса (1 = по умолчанию)
        touchMultiplier: 1.5,
        infinite: false,
    });

    // ===== Запуск цикла анимации =====
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ===== Обработка якорных ссылок (href="#...") =====
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const headerHeight = parseInt(
            getComputedStyle(document.documentElement)
                .getPropertyValue('--header-height')
        ) || 64;

        lenis.scrollTo(target, {
            offset: -headerHeight - 20,
            duration: 1.2,
        });

        history.pushState(null, '', href);
    });

    // ===== Кнопка «Наверх» (если есть) =====
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            lenis.scrollTo(0, { duration: 1.2 });
        });
    }

    // ===== Отключаем Lenis при открытии мобильного сайдбара =====
    // чтобы не было конфликта со скроллом внутри aside
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

    // ===== Экспортируем lenis в window (на случай, если понадобится) =====
    window.lenis = lenis;
})();