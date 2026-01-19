// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations with stagger
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animated');
            }, index * 100); // Stagger animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.skill-category, .timeline-item, .project-card, .education-card, .info-item, .contact-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);

// Typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing effect after a delay
    setTimeout(() => {
        typeWriter();
    }, 1000);
}

// Add active class to nav links on scroll
const navLinksArray = document.querySelectorAll('.nav-link');
navLinksArray.forEach(link => {
    link.addEventListener('click', function() {
        navLinksArray.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Form validation (if contact form is added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Create floating code particles
function createCodeParticles() {
    const codeSymbols = ['<', '>', '{', '}', '[', ']', '(', ')', '/', '*', '=', '+', '-', ';'];
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'code-particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
    `;
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const symbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
        particle.textContent = symbol;
        particle.style.cssText = `
            position: absolute;
            color: rgba(37, 99, 235, 0.1);
            font-family: 'JetBrains Mono', monospace;
            font-size: ${Math.random() * 20 + 10}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 20 + 10}s infinite linear;
            pointer-events: none;
        `;
        particlesContainer.appendChild(particle);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.3;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize code particles on load
window.addEventListener('load', () => {
    createCodeParticles();
});

// Enhanced typing effect with code syntax
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    
    setTimeout(() => {
        typeWriter();
    }, 1500);
}

// Terminal typing effect
const terminalOutput = document.querySelector('.terminal-output');
if (terminalOutput) {
    const paragraphs = terminalOutput.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
        const originalText = p.textContent;
        p.textContent = '';
        p.style.opacity = '0';
        
        setTimeout(() => {
            p.style.transition = 'opacity 0.5s ease';
            p.style.opacity = '1';
            let i = 0;
            function typeTerminal() {
                if (i < originalText.length) {
                    p.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeTerminal, 20);
                }
            }
            typeTerminal();
        }, 500 + (index * 2000));
    });
}

// Parallax effect for planets
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const planets = document.querySelectorAll('.planet');
    planets.forEach((planet, index) => {
        const speed = (index + 1) * 0.5;
        planet.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Console message with space theme
console.log('%c🚀 Welcome to Visnu\'s Portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold; font-family: "JetBrains Mono", monospace;');
console.log('%cExploring the code universe...', 'color: #7c3aed; font-size: 14px; font-family: "JetBrains Mono", monospace;');
console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'color: #64748b; font-size: 12px;');
console.log('%cconst portfolio = { theme: "space + coding", color: "white" };', 'color: #06b6d4; font-size: 12px; font-family: "JetBrains Mono", monospace;');
