// theme.js
// Переключение тёмной/светлой темы через класс на <html>.
// Класс ставится инлайн-скриптом в <head> ДО отрисовки — против мигания.

(function () {
    'use strict';

    const STORAGE_KEY = 'cavalry-theme';
    const html = document.documentElement;

    // ===== Применяем тему =====
    function applyTheme(theme) {
        if (theme === 'light') {
            html.classList.add('light');
        } else {
            html.classList.remove('light');
        }
    }

    // ===== Определяем предпочитаемую тему =====
    function getPreferredTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'light' || saved === 'dark') return saved;

        return window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark';
    }

    // ===== Отключаем transition при загрузке (против мигания) =====
    html.classList.add('no-transition');

    // ===== Применяем тему СРАЗУ (на случай, если инлайн-скрипт не отработал) =====
    applyTheme(getPreferredTheme());

    // ===== Включаем transition после первого кадра =====
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            html.classList.remove('no-transition');
        });
    });

    // ===== Клик по кнопке темы (делегирование) =====
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('#themeToggle');
        if (!btn) return;

        const isLight = html.classList.contains('light');
        const newTheme = isLight ? 'dark' : 'light';

        applyTheme(newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
    });

    // ===== Реакция на смену системной темы =====
    window.matchMedia('(prefers-color-scheme: light)')
        .addEventListener('change', (e) => {
            if (localStorage.getItem(STORAGE_KEY)) return;   // выбор пользователя важнее
            applyTheme(e.matches ? 'light' : 'dark');
        });
})();