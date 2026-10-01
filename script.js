// ============================================
// Research Interest Hover Popup
// ============================================
function setupResearchInterestPopup() {
    const popup = document.querySelector('.research-popup') || document.createElement('div');
    popup.className = 'research-popup';
    popup.setAttribute('aria-live', 'polite');
    popup.setAttribute('aria-hidden', 'true');

    if (!popup.querySelector('img')) {
        const popupImage = document.createElement('img');
        popupImage.alt = 'Research interest graphic';
        popup.appendChild(popupImage);
    }

    if (!popup.parentNode) {
        document.body.appendChild(popup);
    }

    const popupImage = popup.querySelector('img');
    const researchItems = document.querySelectorAll('.research-interests li');

    const assetMap = {
        'b cell selection': 'b-cell-selection.webp',
        'evolution of adaptive immunity': 'evolution-adaptive-immunity.webp',
        'antibodies': 'antibodies.webp',
        'improving vaccine design': 'vaccine-design.webp'
    };

    const normalizeText = (text) => {
        return text.toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    };

    const getAssetForItem = (item) => {
        const text = normalizeText(item.textContent);
        return assetMap[text] || null;
    };

    const showPopup = (item) => {
        const asset = getAssetForItem(item);
        if (!asset) return;

        popupImage.src = asset;
        popupImage.alt = item.textContent.trim();
        popup.classList.add('visible');
        popup.setAttribute('aria-hidden', 'false');
    };

    const hidePopup = () => {
        popup.classList.remove('visible');
        popup.setAttribute('aria-hidden', 'true');
    };

    researchItems.forEach(item => {
        item.addEventListener('mouseenter', () => showPopup(item));
        item.addEventListener('mouseleave', hidePopup);
        item.addEventListener('focus', () => showPopup(item));
        item.addEventListener('blur', hidePopup);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupResearchInterestPopup);
} else {
    setupResearchInterestPopup();
}
