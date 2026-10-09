// theme.js — ES5-совместимая версия
(function () {
    'use strict';

    var STORAGE_KEY = 'cavalry-theme';
    var html = document.documentElement;

    // ===== Безопасная работа с localStorage =====
    function getSavedTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    function saveTheme(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (e) {
            // Игнорируем — тема применится, но не сохранится
        }
    }

    // ===== Применяем тему =====
    function applyTheme(theme) {
        var isLight = (theme === 'light');
        var classes = html.className.replace(/\blight\b/g, '').replace(/\s+/g, ' ').trim();

        if (isLight) {
            classes = (classes + ' light').trim();
        }

        html.className = classes;
    }

    // ===== Определяем тему =====
    function getPreferredTheme() {
        var saved = getSavedTheme();
        if (saved === 'light' || saved === 'dark') return saved;

        var prefersLight = false;
        try {
            if (window.matchMedia) {
                prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            }
        } catch (e) {
            prefersLight = false;
        }

        return prefersLight ? 'light' : 'dark';
    }

    // ===== Отключаем transition при загрузке =====
    html.className += ' no-transition';

    // ===== Применяем тему сразу =====
    applyTheme(getPreferredTheme());

    // ===== Включаем transition после первого кадра =====
    var raf = window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || function (cb) { return setTimeout(cb, 16); };

    raf(function () {
        raf(function () {
            html.className = html.className.replace(/\bno-transition\b/g, '').replace(/\s+/g, ' ').trim();
        });
    });

    // ===== Обработчик клика (делегирование, ES5) =====
    function findClosest(el, className) {
        while (el && el !== document) {
            if (el.className && el.className.indexOf(className) !== -1) return el;
            el = el.parentNode;
        }
        return null;
    }

    document.addEventListener('click', function (e) {
        var target = e.target || e.srcElement;
        var btn = target;

        // Ищем #themeToggle вверх по DOM
        while (btn && btn !== document) {
            if (btn.id === 'themeToggle') break;
            btn = btn.parentNode;
        }

        if (!btn || btn === document) return;

        var isLight = /\blight\b/.test(html.className);
        var newTheme = isLight ? 'dark' : 'light';

        applyTheme(newTheme);
        saveTheme(newTheme);
    });

    // ===== Реакция на смену системной темы =====
    try {
        if (window.matchMedia) {
            var mq = window.matchMedia('(prefers-color-scheme: light)');
            var listener = function (e) {
                if (getSavedTheme()) return;
                applyTheme(e.matches ? 'light' : 'dark');
            };

            if (mq.addEventListener) {
                mq.addEventListener('change', listener);
            } else if (mq.addListener) {
                // Старый API (Safari < 14, старые Chrome)
                mq.addListener(listener);
            }
        }
    } catch (e) {
        // Игнорируем
    }
})();