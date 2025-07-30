document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Menu Hamburguer Funcional ---
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Fechar o menu mobile ao clicar em um link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- 2. Botão "Voltar ao Topo" ---
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Mostra o botão após rolar 300px
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rola suavemente para o topo
        });
    });

    // --- 3. Animações ao Rolar (Scroll Reveal) ---
    const revealElements = document.querySelectorAll('.reveal-item');

    const observerOptions = {
        threshold: 0.1 // O elemento se torna visível quando 10% dele está na viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Para de observar depois que o elemento é revelado
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        observer.observe(element);
    });

    // --- 4. Rolagem Suave para Links de Âncora (fallback para navegadores antigos se CSS não for suficiente) ---
    // Embora tenhamos 'scroll-behavior: smooth' no CSS, este é um bom fallback e exemplo de como faríamos via JS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});