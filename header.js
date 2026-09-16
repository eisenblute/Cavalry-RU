(function () 
{
    // Определяем, находимся ли мы внутри /pages/
    const inPages = window.location.pathname.includes('/pages/');
    const prefix = inPages ? '../' : '';

    const headerHTML = `
        
        <a href="${prefix}index.html" class="logo"><img src="${prefix}imgs/logo.svg" width="48" height="48"> Cavalry-RU</a>
        <div class="header-right">
            
            <button class="burger">☰</button>
            
        </div>
        
    `;

    document.addEventListener('DOMContentLoaded', () => 
    {
        const header = document.querySelector('header');
        if (header) header.innerHTML = headerHTML;
    });
})();