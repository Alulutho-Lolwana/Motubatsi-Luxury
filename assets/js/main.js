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

    // Accessible image gallery lightbox, following the Campus Cart interaction pattern.
    // Only meaningful content images inside <main> are viewable. Linked images, controls,
    // maps and explicitly excluded images are left untouched.
    function isViewableImage(image) {
        if (!image || !image.closest('main')) return false;
        if (image.closest('a, button, .lightbox, .modal, .leaflet-container, [data-no-lightbox]')) return false;
        return image.hasAttribute('alt') && image.alt.trim() !== '';
    }

    function initLightbox() {
        var main = document.querySelector('main');
        if (!main || !main.querySelector('img')) return;

        var overlay = document.createElement('div');
        overlay.className = 'lightbox';
        overlay.hidden = true;
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Image viewer');

        function makeButton(className, label, text) {
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'lb-btn ' + className;
            button.setAttribute('aria-label', label);
            button.textContent = text;
            return button;
        }

        var closeButton = makeButton('lb-close', 'Close image viewer', '×');
        var previousButton = makeButton('lb-prev', 'Previous image', '‹');
        var nextButton = makeButton('lb-next', 'Next image', '›');
        var figure = document.createElement('figure');
        figure.className = 'lb-figure';
        var enlargedImage = document.createElement('img');
        enlargedImage.className = 'lb-image';
        var caption = document.createElement('figcaption');
        caption.className = 'lb-caption';
        var counter = document.createElement('p');
        counter.className = 'lb-count';

        figure.appendChild(enlargedImage);
        figure.appendChild(caption);
        figure.appendChild(counter);
        overlay.appendChild(closeButton);
        overlay.appendChild(previousButton);
        overlay.appendChild(figure);
        overlay.appendChild(nextButton);
        document.body.appendChild(overlay);

        var currentImages = [];
        var currentIndex = 0;
        var opener = null;

        function groupFor(image) {
            var group = image.closest('.gallery, .card-grid, .grid, section') || main;
            return Array.prototype.filter.call(group.querySelectorAll('img'), function (candidate) {
                return isViewableImage(candidate) && !candidate.closest('[hidden]');
            });
        }

        function captionFor(image) {
            var figureElement = image.closest('figure');
            var figureCaption = figureElement ? figureElement.querySelector('figcaption') : null;
            if (figureCaption) return figureCaption.textContent.trim();
            var card = image.closest('.card');
            var heading = card ? card.querySelector('h3') : null;
            return heading ? heading.textContent.trim() : image.alt;
        }

        function showImage(index) {
            if (!currentImages.length) return;
            currentIndex = (index + currentImages.length) % currentImages.length;
            var image = currentImages[currentIndex];
            enlargedImage.src = image.currentSrc || image.src;
            enlargedImage.alt = image.alt;
            caption.textContent = captionFor(image);
            counter.textContent = 'Image ' + (currentIndex + 1) + ' of ' + currentImages.length;
            previousButton.hidden = nextButton.hidden = currentImages.length < 2;
        }

        function openLightbox(image) {
            opener = image;
            currentImages = groupFor(image);
            showImage(currentImages.indexOf(image));
            overlay.hidden = false;
            document.body.classList.add('lightbox-open');
            closeButton.focus();
        }

        function closeLightbox() {
            if (overlay.hidden) return;
            overlay.hidden = true;
            document.body.classList.remove('lightbox-open');
            enlargedImage.removeAttribute('src');
            if (opener) opener.focus();
        }

        function prepareImage(image) {
            if (!isViewableImage(image) || image.getAttribute('role') === 'button') return;
            image.classList.add('lightbox-trigger');
            image.tabIndex = 0;
            image.setAttribute('role', 'button');
            image.setAttribute('aria-label', 'View larger image: ' + image.alt);
        }

        Array.prototype.forEach.call(main.querySelectorAll('img'), prepareImage);

        // Observe newly rendered catalogue cards so their images also join the lightbox.
        if (typeof MutationObserver !== 'undefined') {
            new MutationObserver(function (changes) {
                changes.forEach(function (change) {
                    Array.prototype.forEach.call(change.addedNodes, function (node) {
                        if (node.nodeType !== 1) return;
                        if (node.tagName === 'IMG') prepareImage(node);
                        if (node.querySelectorAll) {
                            Array.prototype.forEach.call(node.querySelectorAll('img'), prepareImage);
                        }
                    });
                });
            }).observe(main, { childList: true, subtree: true });
        }

        // Delegated listeners handle both initial and dynamically generated product images.
        document.addEventListener('click', function (event) {
            var image = event.target.closest ? event.target.closest('img') : null;
            if (image && image.getAttribute('role') === 'button' && isViewableImage(image)) {
                openLightbox(image);
            }
        });

        document.addEventListener('keydown', function (event) {
            var target = event.target;
            if (target && target.tagName === 'IMG' && target.getAttribute('role') === 'button' &&
                (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault();
                openLightbox(target);
            }
        });

        function trapLightboxFocus(event) {
            if (event.key !== 'Tab') return;
            var focusable = Array.prototype.slice.call(
                overlay.querySelectorAll('button:not([hidden]), [href], [tabindex]:not([tabindex="-1"])')
            ).filter(function (element) {
                return !element.disabled && element.offsetParent !== null;
            });
            if (!focusable.length) {
                event.preventDefault();
                closeButton.focus();
                return;
            }
            var first = focusable[0];
            var last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }

        closeButton.addEventListener('click', closeLightbox);
        previousButton.addEventListener('click', function () { showImage(currentIndex - 1); });
        nextButton.addEventListener('click', function () { showImage(currentIndex + 1); });
        overlay.addEventListener('click', function (event) {
            if (event.target === overlay) closeLightbox();
        });
        overlay.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') closeLightbox();
            if (event.key === 'ArrowLeft' && currentImages.length > 1) showImage(currentIndex - 1);
            if (event.key === 'ArrowRight' && currentImages.length > 1) showImage(currentIndex + 1);
            trapLightboxFocus(event);
        });

        var touchStartX = null;
        overlay.addEventListener('touchstart', function (event) {
            touchStartX = event.changedTouches[0].clientX;
        }, { passive: true });
        overlay.addEventListener('touchend', function (event) {
            if (touchStartX === null || currentImages.length < 2) return;
            var distance = event.changedTouches[0].clientX - touchStartX;
            if (Math.abs(distance) > 50) showImage(distance > 0 ? currentIndex - 1 : currentIndex + 1);
            touchStartX = null;
        }, { passive: true });
    }

    initLightbox();
});