// script.js — ES5-совместимая версия
document.addEventListener('DOMContentLoaded', function () {

    // ===== Создаём оверлей (если нет) =====
    var overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
    }

    // ===== Делегирование кликов =====
    document.addEventListener('click', function (e) {
        var target = e.target || e.srcElement;

        // Клик по бургеру
        var el = target;
        while (el && el !== document) {
            if (el.className && el.className.indexOf('burger') !== -1) {
                var aside = document.querySelector('aside');
                if (aside) {
                    if (/\bopen\b/.test(aside.className)) {
                        aside.className = aside.className.replace(/\bopen\b/g, '').replace(/\s+/g, ' ').trim();
                        overlay.className = overlay.className.replace(/\bopen\b/g, '').replace(/\s+/g, ' ').trim();
                    } else {
                        aside.className = (aside.className + ' open').trim();
                        overlay.className = (overlay.className + ' open').trim();
                    }
                }
                return;
            }
            el = el.parentNode;
        }

        // Клик по оверлею
        if (target === overlay) {
            var aside2 = document.querySelector('aside');
            if (aside2) aside2.className = aside2.className.replace(/\bopen\b/g, '').replace(/\s+/g, ' ').trim();
            overlay.className = overlay.className.replace(/\bopen\b/g, '').replace(/\s+/g, ' ').trim();
            return;
        }

        // Клик по ссылке в сайдбаре — закрываем на мобиле
        el = target;
        while (el && el !== document) {
            if (el.tagName === 'A' && el.parentNode && el.parentNode.parentNode) {
                var sidebar = el.parentNode.parentNode;
                if (sidebar.tagName === 'ASIDE' || (sidebar.parentNode && sidebar.parentNode.tagName === 'ASIDE')) {
                    if (window.innerWidth <= 900) {
                        var aside3 = document.querySelector('aside');
                        if (aside3) aside3.className = aside3.className.replace(/\bopen\b/g, '').replace(/\s+/g, ' ').trim();
                        overlay.className = overlay.className.replace(/\bopen\b/g, '').replace(/\s+/g, ' ').trim();
                    }
                    return;
                }
            }
            el = el.parentNode;
        }
    });

    // ===== Закрытие по Esc =====
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            var aside = document.querySelector('aside');
            if (aside) aside.className = aside.className.replace(/\bopen\b/g, '').replace(/\s+/g, ' ').trim();
            overlay.className = overlay.className.replace(/\bopen\b/g, '').replace(/\s+/g, ' ').trim();
        }
    });
});