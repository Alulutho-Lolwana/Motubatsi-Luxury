// Motubatsi Luxury — shared interactive features
document.addEventListener('DOMContentLoaded', function () {
    // Mobile navigation toggle.
    var toggle = document.querySelector('.menu-toggle');
    var links = document.querySelector('.nav-links');

    if (toggle && links) {
        toggle.addEventListener('click', function () {
            var isOpen = links.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    // Image lightbox for all content images across every page.
    // Map tiles and Leaflet controls are excluded because they are interface elements.
    var pageImages = Array.prototype.filter.call(document.querySelectorAll('img'), function (image) {
        return !image.closest('.leaflet-container') && !image.closest('.image-lightbox');
    });
    if (!pageImages.length) return;

    var lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Product image preview');
    lightbox.hidden = true;

    var closeButton = document.createElement('button');
    closeButton.className = 'image-lightbox-close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close image preview');
    closeButton.innerHTML = '&times;';

    var content = document.createElement('div');
    content.className = 'image-lightbox-content';

    var enlargedImage = document.createElement('img');
    enlargedImage.className = 'image-lightbox-image';
    enlargedImage.alt = '';

    var caption = document.createElement('p');
    caption.className = 'image-lightbox-caption';

    content.appendChild(enlargedImage);
    content.appendChild(caption);
    lightbox.appendChild(closeButton);
    lightbox.appendChild(content);
    document.body.appendChild(lightbox);

    var previouslyFocused = null;

    function closeLightbox() {
        if (lightbox.hidden) return;
        lightbox.hidden = true;
        document.body.style.overflow = '';
        enlargedImage.removeAttribute('src');
        if (previouslyFocused) previouslyFocused.focus();
    }

    function openLightbox(image) {
        previouslyFocused = image;
        enlargedImage.src = image.currentSrc || image.src;
        enlargedImage.alt = image.alt || 'Enlarged product image';
        caption.textContent = image.alt || '';
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        closeButton.focus();
    }

    pageImages.forEach(function (image) {
        image.classList.add('lightbox-trigger');
        image.setAttribute('tabindex', '0');
        image.setAttribute('role', 'button');
        image.setAttribute('aria-label', 'View larger image: ' + (image.alt || 'product image'));
        image.addEventListener('click', function () {
            openLightbox(image);
        });
        image.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openLightbox(image);
            }
        });
    });

    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox || event.target === enlargedImage) {
            closeLightbox();
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeLightbox();
    });
});
