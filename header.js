// header.js — ES5-совместимая версия
(function () {
    var path = window.location.pathname;
    var inPages = path.indexOf('/pages/') !== -1;
    var prefix = inPages ? '../' : '';

    var headerHTML = ''
        + '<a href="' + prefix + 'index.html" class="logo">'
        +     '<img src="' + prefix + 'imgs/logo.svg" width="48" height="48" alt="Cavalry-RU">'
        +     'Cavalry-RU'
        + '</a>'
        + '<div class="header-right">'
        +     '<button class="theme-toggle" id="themeToggle" title="Переключить тему" aria-label="Переключить тему">'
        +         '<span class="icon-sun">☀</span>'
        +         '<span class="icon-moon">☾</span>'
        +     '</button>'
        +     '<button class="burger">☰</button>'
        + '</div>';

    function insertHeader() {
        var header = document.querySelector('header');
        if (header) {
            header.innerHTML = headerHTML;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertHeader);
    } else {
        insertHeader();
    }
})();