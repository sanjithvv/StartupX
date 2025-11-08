document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('menu-toggle-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-links a, #mobile-menu a');
    const sections = document.querySelectorAll('.page-section');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    window.showPage = function(pageId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });

        const activeSection = document.getElementById(pageId);
        if (activeSection) {
            activeSection.classList.add('active');
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        if (window.innerWidth <= 768) {
            mobileMenu.style.display = 'none';
        }
    }
    window.showPage('home');
    mobileMenuButton.addEventListener('click', () => {
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'block';
        }
    });
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = e.target.getAttribute('data-page');
            window.showPage(pageId);
        });
    });
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formStatus.textContent = 'Thank you for your inquiry! We have received your message and will be in touch shortly.';
        formStatus.style.display = 'block';
        contactForm.reset();
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    });
});
