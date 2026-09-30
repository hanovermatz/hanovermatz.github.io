// ============================================
// 1. Smooth Scroll Navigation
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// 2. Intersection Observer for Scroll Animations
// ============================================
const animationObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animating once
            observer.unobserve(entry.target);
        }
    });
}, animationObserverOptions);

// Observe all animatable elements
document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .highlight-card, .media-item, .about-content, .profile-picture-container').forEach(el => {
    animationObserver.observe(el);
});

// ============================================
// 3. Research Cards Scroll Snap Navigation & Dot Indicator
// ============================================
function setupResearchScrollSnap() {
    const cards = document.querySelectorAll('.highlight-card');
    const highlightsSection = document.querySelector('#highlights') || document.querySelector('.highlights-grid');
    
    if (!cards.length) return;

    // Build Dot Navigation Container
    const dotsNav = document.createElement('nav');
    dotsNav.className = 'card-dots-nav';
    dotsNav.setAttribute('aria-label', 'Research Highlights Navigation');
    
    // Build Active Slide Counter
    const counter = document.createElement('div');
    counter.className = 'slide-counter';
    counter.textContent = `1 / ${cards.length}`;
    dotsNav.appendChild(counter);

    const dots = [];

    // Create a Dot Button for each Card
    cards.forEach((card, index) => {
        const heading = card.querySelector('h3');
        const title = heading ? heading.textContent.trim() : `Slide ${index + 1}`;

        const dot = document.createElement('button');
        dot.className = 'dot-btn';
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Navigate to: ${title}`);
        dot.setAttribute('data-title', title);

        // 1. Update dot click target alignment
dot.addEventListener('click', () => {
    card.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Aligns top of card with scroll-margin-top offset
    });
});

        dotsNav.appendChild(dot);
        dots.push(dot);
    });

    document.body.appendChild(dotsNav);

    // Observer: Active Card Tracker
    const cardObserverOptions = {
    threshold: 0.3 // Card only needs to be 30% in view to highlight dot
};

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeIndex = Array.from(cards).indexOf(entry.target);
                
                // Update active dot
                dots.forEach((dot, idx) => {
                    dot.classList.toggle('active', idx === activeIndex);
                });

                // Update counter text
                counter.textContent = `${activeIndex + 1} / ${cards.length}`;
            }
        });
    }, cardObserverOptions);

    cards.forEach(card => cardObserver.observe(card));

    // Observer: Show/Hide Dots Nav depending on Research Section visibility
    if (highlightsSection) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dotsNav.classList.add('visible');
                } else {
                    dotsNav.classList.remove('visible');
                }
            });
        }, { threshold: 0.05 });

        sectionObserver.observe(highlightsSection);
    }
}

// Initialize Scroll Snap Dots Navigation
setupResearchScrollSnap();

// ============================================
// 4. Active Navigation Link on Scroll
// ============================================
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, { passive: true });

// ============================================
// 5. Scroll to Top Button
// ============================================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top of page');
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: var(--secondary-color);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    z-index: 99;
    transition: opacity 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'auto';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
    }
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseover', () => {
    scrollTopBtn.style.backgroundColor = 'var(--accent-color)';
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseout', () => {
    scrollTopBtn.style.backgroundColor = 'var(--secondary-color)';
    scrollTopBtn.style.transform = 'scale(1)';
});

// ============================================
// 6. Page Load Fade-in
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease-in';
