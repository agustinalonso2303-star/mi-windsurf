// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para enlaces de navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animación del botón CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Hacer scroll a la sección "acerca"
            const aboutSection = document.querySelector('#acerca');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Manejo del formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los datos del formulario
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Validación básica
            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos');
                return;
            }
            
            // Simulación de envío (en un proyecto real, aquí iría la llamada a un backend)
            alert('¡Mensaje enviado con éxito! Te responderé pronto.');
            this.reset();
        });
    }

    // Animación de elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animar
    const animateElements = document.querySelectorAll('.feature, .about h2, .contact h2');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Cambio de estilo del header al hacer scroll
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(44, 62, 80, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--primary-color)';
            header.style.backdropFilter = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Efecto parallax suave en el hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }
});

// Función para verificar si la página está en GitHub Pages
function isGitHubPages() {
    return window.location.hostname.includes('github.io');
}

// Mensaje de bienvenida en la consola
console.log('%c🚀 ¡Bienvenido a mi página web!', 'color: #3498db; font-size: 20px; font-weight: bold;');
console.log('%cEsta página está desplegada en GitHub Pages', 'color: #2c3e50; font-size: 14px;');

if (isGitHubPages()) {
    console.log('%c✅ Estás viendo esta página en GitHub Pages', 'color: #27ae60; font-size: 14px;');
}
