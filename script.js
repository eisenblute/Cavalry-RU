// script.js — общая логика страницы
document.addEventListener('DOMContentLoaded', () => {

    // ===== Создаём оверлей (если нет) =====
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
    }

    // ===== Открытие/закрытие сайдбара через делегирование =====
    // Работает, даже если .burger появится позже (например, из header.js)
    document.addEventListener('click', (e) => {
        // Клик по бургеру
        if (e.target.closest('.burger')) {
            const aside = document.querySelector('aside');
            if (!aside) return;
            aside.classList.toggle('open');
            overlay.classList.toggle('open');
            return;
        }

        // Клик по оверлею
        if (e.target.classList.contains('overlay')) {
            document.querySelector('aside')?.classList.remove('open');
            overlay.classList.remove('open');
            return;
        }

        // Клик по ссылке в сайдбаре — закрываем на мобиле
        if (e.target.closest('aside a')) {
            if (window.innerWidth <= 900) {
                document.querySelector('aside')?.classList.remove('open');
                overlay.classList.remove('open');
            }
        }
    });

    // ===== Закрытие по Esc =====
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelector('aside')?.classList.remove('open');
            overlay.classList.remove('open');
        }
    });
});