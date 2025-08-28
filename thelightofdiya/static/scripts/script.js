
// Smooth scroll com compensação de header
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const id = this.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (!target) return;

        e.preventDefault();

        const header = document.querySelector('header');
        const headerH = header ? header.offsetHeight : 0;
        const y = target.getBoundingClientRect().top + window.pageYOffset - headerH;

        window.scrollTo({ top: y, behavior: 'smooth' });

        // opcional: atualiza a hash na URL
        history.pushState(null, '', `#${id}`);
    });
});

window.onload = function() {
    console.log("Página totalmente carregada!");

    const logoTitle = document.querySelector(".logo-title");

    if (!logoTitle) return;

    if (window.location.pathname !== "/") {
        logoTitle.classList.add("show");
    }
};

window.addEventListener("scroll", function() {
    if (window.location.pathname !== "/") {
        return;
    }

    const logoTitle = document.querySelector(".logo-title");

    if (!logoTitle) return;

    if (window.scrollY > 100) {
        logoTitle.classList.add("show");
    } else {
        logoTitle.classList.remove("show");
    }
});