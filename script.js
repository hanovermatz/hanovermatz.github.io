/* ============================================
   1. Main Initialization
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    setupResearchInterestPopup();
    setupScrollAnimations();
    setupActiveNavigation();
});

/* ============================================
   2. Research Interest Hover & Focus Popup
   ============================================ */
function setupResearchInterestPopup() {
    // 1. Ensure the popup container exists
    let popup = document.querySelector('.research-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.className = 'research-popup';
        popup.setAttribute('aria-live', 'polite');
        popup.setAttribute('aria-hidden', 'true');
        document.body.appendChild(popup);
    }

    // 2. Ensure image element exists inside popup
    let popupImage = popup.querySelector('img');
    if (!popupImage) {
        popupImage = document.createElement('img');
        popupImage.alt = 'Research interest graphic';
        popup.appendChild(popupImage);
    }

    const researchItems = document.querySelectorAll('.research-interests li');

    // Asset mapping table
    const assetMap = {
        'b cell selection': 'b-cell-selection.webp',
        'evolution of adaptive immunity': 'evolution-adaptive-immunity.webp',
        'antibodies': 'antibodies.webp',
        'improving vaccine design': 'vaccine-design.webp'
    };

    // Preload image assets to eliminate hover flicker
    Object.values(assetMap).forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Helper: Normalize item text for key matching
    const normalizeText = (text) => {
        return text.toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    };

    // Helper: Resolve asset filename from text content
    const getAssetForItem = (item) => {
        const text = normalizeText(item.textContent);
        return assetMap[text] || null;
    };

    // Show Popup
    const showPopup = (item) => {
        const asset = getAssetForItem(item);
        if (!asset) return;

        popupImage.src = asset;
        popupImage.alt = item.textContent.trim();
        popup.classList.add('visible');
        popup.setAttribute('aria-hidden', 'false');
    };

    // Hide Popup
    const hidePopup = () => {
        popup.classList.remove('visible');
        popup.setAttribute('aria-hidden', 'true');
    };

    // Attach listeners to research list items
    researchItems.forEach(item => {
        // Enable keyboard focusability if not already tabbable
        if (!item.hasAttribute('tabindex')) {
            item.setAttribute('tabindex', '0');
        }

        // Mouse events
        item.addEventListener('mouseenter', () => showPopup(item));
        item.addEventListener('mouseleave', hidePopup);

        // Keyboard focus events for accessibility
        item.addEventListener('focus', () => showPopup(item));
        item.addEventListener('blur', hidePopup);

        // Touch device handling (tap to show/toggle)
        item.addEventListener('touchstart', (e) => {
            if (!popup.classList.contains('visible')) {
                showPopup(item);
                e.stopPropagation();
            } else {
                hidePopup();
            }
        }, { passive: true });
    });

    // Dismiss popup on 'Escape' key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hidePopup();
        }
    });

    // Dismiss popup when clicking/tapping outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.research-interests') && !e.target.closest('.research-popup')) {
            hidePopup();
        }
    });
}

/* ============================================
   3. Scroll-Animation Engine (IntersectionObserver)
   ============================================ */
function setupScrollAnimations() {
    const animatableElements = document.querySelectorAll(`
        .highlight-card,
        .media-item,
        .about-content,
        .profile-picture-container,
        .slide-in-right,
        .fade-in,
        .fade-in-delay
    `);

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target); // Trigger animation once
                }
            });
        }, observerOptions);

        animatableElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for browsers without IntersectionObserver support
        animatableElements.forEach(el => el.classList.add('visible'));
    }
}

/* ============================================
   4. Active Navigation Highlight on Scroll
   ============================================ */
function setupActiveNavigation() {
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    const sections = document.querySelectorAll('section[id], header[id]');

    if (!sections.length || !navLinks.length) return;

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 200; // Offset for sticky navbar

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}
