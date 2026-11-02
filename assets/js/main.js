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

    // Product catalogue: data-driven rendering, search, category filters and sorting.
    var productGrid = document.getElementById('catalog-products');
    if (productGrid) {
        var products = [
            { name: 'Heritage Dress', category: 'dresses', image: '../assets/images/mokorotlo.jpeg', description: 'A contemporary statement piece inspired by Basotho heritage, designed for elegant occasions.' },
            { name: 'Mokorotlo Evening Gown', category: 'dresses', image: '../assets/images/founder.jpeg', description: 'A floor-length gown with subtle mokorotlo-inspired silhouette lines, for formal events.' },
            { name: 'Heritage Wrap Dress', category: 'dresses', image: '../assets/images/ceo.jpeg', description: 'A versatile wrap-style dress finished with hand-stitched detailing.' },
            { name: 'Luxury Heritage Jacket', category: 'jackets', image: '../assets/images/founder-ceo.jpeg', description: 'A sophisticated jacket combining modern tailoring with subtle Basotho-inspired elements.' },
            { name: 'Structured Blazer', category: 'jackets', image: '../assets/images/mokorotlo.jpeg', description: 'A tailored blazer with a Basotho blanket-inspired lining, made for statement dressing.' },
            { name: 'Basotho Blanket Collection', category: 'blankets', image: '../assets/images/ceo.jpeg', description: 'Fashion pieces inspired by the iconic Basotho blanket and its connection to cultural identity.' },
            { name: 'Luxury Shawl', category: 'blankets', image: '../assets/images/founder.jpeg', description: 'A lightweight shawl reworking traditional Basotho blanket patterns for everyday luxury.' },
            { name: 'Sotho Hat Collection', category: 'headwear', image: '../assets/images/web-development.jpg', description: 'Contemporary pieces inspired by the mokorotlo, a distinctive symbol of Basotho culture.' }
        ];
        var searchInput = document.getElementById('catalog-search');
        var sortSelect = document.getElementById('catalog-sort');
        var resultCount = document.getElementById('catalog-results');
        var emptyMessage = document.getElementById('catalog-empty');
        var filterButtons = Array.prototype.slice.call(document.querySelectorAll('.catalog-filter'));
        var activeCategory = 'all';

        function makeCatalogElement(tag, className, text) {
            var element = document.createElement(tag);
            if (className) element.className = className;
            if (typeof text === 'string') element.textContent = text;
            return element;
        }

        function renderProducts() {
            var query = searchInput.value.trim().toLowerCase();
            var visibleProducts = products.filter(function (product) {
                var matchesCategory = activeCategory === 'all' || product.category === activeCategory;
                var searchableText = (product.name + ' ' + product.description + ' ' + product.category).toLowerCase();
                return matchesCategory && searchableText.indexOf(query) !== -1;
            });

            var sortMode = sortSelect.value;
            if (sortMode === 'name-asc') {
                visibleProducts.sort(function (a, b) { return a.name.localeCompare(b.name); });
            } else if (sortMode === 'name-desc') {
                visibleProducts.sort(function (a, b) { return b.name.localeCompare(a.name); });
            } else if (sortMode === 'category') {
                visibleProducts.sort(function (a, b) {
                    return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
                });
            } else {
                visibleProducts.sort(function (a, b) { return products.indexOf(a) - products.indexOf(b); });
            }

            productGrid.textContent = '';
            visibleProducts.forEach(function (product) {
                var card = makeCatalogElement('article', 'card catalog-product-card');
                var imageWrap = makeCatalogElement('div', 'card-image');
                var image = makeCatalogElement('img');
                image.src = product.image;
                image.alt = product.name;
                image.loading = 'lazy';
                imageWrap.appendChild(image);

                var content = makeCatalogElement('div', 'card-content');
                content.appendChild(makeCatalogElement('p', 'catalog-product-category', product.category));
                content.appendChild(makeCatalogElement('h3', '', product.name));
                content.appendChild(makeCatalogElement('span', 'price-tag', 'Enquire for pricing'));
                content.appendChild(makeCatalogElement('p', '', product.description));

                var enquiry = makeCatalogElement('a', 'btn btn-outline mt-2', 'Make an Enquiry');
                enquiry.href = './enquiry.html';
                content.appendChild(enquiry);
                card.appendChild(imageWrap);
                card.appendChild(content);
                productGrid.appendChild(card);
            });

            resultCount.textContent = 'Showing ' + visibleProducts.length + ' of ' + products.length + ' pieces';
            emptyMessage.hidden = visibleProducts.length !== 0;
        }

        filterButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                activeCategory = button.getAttribute('data-category');
                filterButtons.forEach(function (item) {
                    var selected = item === button;
                    item.classList.toggle('active', selected);
                    item.setAttribute('aria-pressed', String(selected));
                });
                renderProducts();
            });
        });
        searchInput.addEventListener('input', renderProducts);
        sortSelect.addEventListener('change', renderProducts);
        renderProducts();
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
