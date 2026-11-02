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
            { name: 'Heritage Dress I', category: 'dresses', image: '../assets/images/Dress 1.jpeg', description: 'A refined heritage-inspired dress for elegant occasions, with a contemporary silhouette.' },
            { name: 'Heritage Dress II', category: 'dresses', image: '../assets/images/Dress 2.jpeg', description: 'A modern statement dress celebrating Basotho identity and confident style.' },
            { name: 'Heritage Dress III', category: 'dresses', image: '../assets/images/Dress 3.jpeg', description: 'A versatile occasion piece bringing traditional inspiration into a modern wardrobe.' },
            { name: 'Heritage Dress IV', category: 'dresses', image: '../assets/images/Dress 4.jpeg', description: 'A distinctive dress from the Motubatsi heritage-inspired collection.' },
            { name: 'Basotho Jacket I', category: 'jackets', image: '../assets/images/Basotho jacket 1.jpeg', description: 'A tailored outerwear piece inspired by Basotho dress and contemporary luxury.' },
            { name: 'Basotho Jacket II', category: 'jackets', image: '../assets/images/Basotho jacket 2.jpeg', description: 'A statement jacket designed to bring cultural influence to modern styling.' },
            { name: 'Basotho Jacket III', category: 'jackets', image: '../assets/images/Basotho jacket 3.jpeg', description: 'A distinctive jacket from the Motubatsi Basotho-inspired outerwear range.' },
            { name: 'Basotho Jacket IV', category: 'jackets', image: '../assets/images/Basotho jacket 4.jpeg', description: 'A contemporary jacket celebrating heritage through thoughtful design.' },
            { name: 'Khobo Collection I', category: 'blankets', image: '../assets/images/Khobo 1.jpeg', description: 'A heritage-inspired khobo piece reflecting the warmth and character of Basotho textile traditions.' },
            { name: 'Khobo Collection II', category: 'blankets', image: '../assets/images/Khobo 2.jpeg', description: 'A distinctive textile piece inspired by traditional Basotho styling.' },
            { name: 'Khobo Collection III', category: 'blankets', image: '../assets/images/Khobo 3.jpeg', description: 'A versatile heritage layer designed to complement contemporary outfits.' },
            { name: 'Khobo Collection IV', category: 'blankets', image: '../assets/images/Khobo 4.jpeg', description: 'A statement piece celebrating the texture and identity of Basotho-inspired design.' },
            { name: 'Khobo Collection V', category: 'blankets', image: '../assets/images/Khobo 5.jpeg', description: 'A refined addition to the Motubatsi collection of heritage-inspired wraps and textiles.' },
            { name: 'Mokorotlo I', category: 'headwear', image: '../assets/images/Mokorotlo 1.jpeg', description: 'Headwear inspired by the mokorotlo, an enduring symbol of Basotho identity.' },
            { name: 'Mokorotlo II', category: 'headwear', image: '../assets/images/Mokorotlo 2.jpeg', description: 'A distinctive mokorotlo-inspired piece celebrating Basotho cultural heritage.' },
            { name: 'Mokorotlo III', category: 'headwear', image: '../assets/images/Mokorotlo 3.jpeg', description: 'A heritage headwear design with a timeless cultural influence.' },
            { name: 'Mokorotlo IV', category: 'headwear', image: '../assets/images/Mokorotlo 4.jpeg', description: 'A statement headwear piece inspired by the iconic Basotho hat.' },
            { name: 'Mokorotlo Hat Pair', category: 'headwear', image: '../assets/images/Mokorotlo.jpeg', description: 'A pair of hand-crafted Basotho mokorotlo hats, showcasing traditional woven form and colourful detailing.' },
            { name: 'Heritage Blanket & Mokorotlo Set', category: 'blankets', image: '../assets/images/background.image.jpeg', description: 'A Basotho-inspired heritage ensemble featuring a traditional blanket and mokorotlo, styled together in a scenic setting.' }
        ];
        products.push(
            { name: "Crimson Heritage Dress", category: "dresses", image: "../assets/images/Dress 1.jpeg", color: "Crimson", description: "A rich crimson colourway of the Heritage Dress, offering a bold alternative for elegant occasions." },
            { name: "Ivory Heritage Dress", category: "dresses", image: "../assets/images/Dress 2.jpeg", color: "Ivory", description: "An ivory colourway of the Heritage Dress, bringing a soft and timeless finish to the modern silhouette." },
            { name: "Midnight Heritage Dress", category: "dresses", image: "../assets/images/Dress 3.jpeg", color: "Midnight", description: "A midnight colourway of the Heritage Dress for a refined, understated statement." },
            { name: "Emerald Heritage Dress", category: "dresses", image: "../assets/images/Dress 4.jpeg", color: "Emerald", description: "An emerald colourway of the Heritage Dress, adding a vibrant tone to the heritage-inspired design." },
            { name: "Sandstone Basotho Jacket", category: "jackets", image: "../assets/images/Basotho jacket 1.jpeg", color: "Sandstone", description: "A sandstone colourway of the Basotho Jacket, designed for versatile contemporary styling." },
            { name: "Royal Blue Basotho Jacket", category: "jackets", image: "../assets/images/Basotho jacket 2.jpeg", color: "Royal Blue", description: "A royal blue colourway of the Basotho Jacket with a confident, striking character." },
            { name: "Charcoal Basotho Jacket", category: "jackets", image: "../assets/images/Basotho jacket 3.jpeg", color: "Charcoal", description: "A charcoal colourway of the Basotho Jacket for a classic and polished look." },
            { name: "Burgundy Basotho Jacket", category: "jackets", image: "../assets/images/Basotho jacket 4.jpeg", color: "Burgundy", description: "A burgundy colourway of the Basotho Jacket, bringing depth to heritage-inspired outerwear." },
            { name: "Ochre Khobo Wrap", category: "blankets", image: "../assets/images/Khobo 1.jpeg", color: "Ochre", description: "An ochre colourway of the Khobo collection, inspired by the warmth of traditional Basotho textiles." },
            { name: "Indigo Khobo Wrap", category: "blankets", image: "../assets/images/Khobo 2.jpeg", color: "Indigo", description: "An indigo colourway of the Khobo collection, designed as a distinctive heritage layer." },
            { name: "Forest Khobo Wrap", category: "blankets", image: "../assets/images/Khobo 3.jpeg", color: "Forest Green", description: "A forest green colourway of the Khobo collection with a grounded, natural character." },
            { name: "Rust Khobo Wrap", category: "blankets", image: "../assets/images/Khobo 4.jpeg", color: "Rust", description: "A rust colourway of the Khobo collection, celebrating warm earthy tones." },
            { name: "Cream Khobo Wrap", category: "blankets", image: "../assets/images/Khobo 5.jpeg", color: "Cream", description: "A cream colourway of the Khobo collection for a soft, understated heritage look." },
            { name: "Natural Woven Mokorotlo", category: "headwear", image: "../assets/images/Mokorotlo 1.jpeg", color: "Natural", description: "A natural-toned colourway of the Mokorotlo headwear collection, celebrating Basotho identity." },
            { name: "Ebony Mokorotlo", category: "headwear", image: "../assets/images/Mokorotlo 2.jpeg", color: "Ebony", description: "An ebony colourway of the Mokorotlo headwear collection with a bold, classic finish." },
            { name: "Copper Mokorotlo", category: "headwear", image: "../assets/images/Mokorotlo 3.jpeg", color: "Copper", description: "A copper colourway of the Mokorotlo headwear collection, inspired by warm earth tones." },
            { name: "Slate Mokorotlo", category: "headwear", image: "../assets/images/Mokorotlo 4.jpeg", color: "Slate", description: "A slate colourway of the Mokorotlo headwear collection for a contemporary heritage statement." },
            { name: "Mokorotlo Duo — Earth Tones", category: "headwear", image: "../assets/images/Mokorotlo.jpeg", color: "Earth Tones", description: "An earth-toned colourway of the Mokorotlo Hat Pair, celebrating traditional woven form." },
            { name: "Heritage Blanket & Mokorotlo Set — Classic", category: "blankets", image: "../assets/images/background.image.jpeg", color: "Classic", description: "A classic colourway of the Heritage Blanket and Mokorotlo ensemble, styled as a coordinated set." }
        );
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
                if (product.color) content.appendChild(makeCatalogElement('p', 'catalog-product-color', 'Colour: ' + product.color));
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

    // Reveal page sections and cards as they enter the viewport.
    // Motion is disabled when the visitor requests reduced motion.
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
        var revealItems = document.querySelectorAll('main section, main .card, main .about-image, main .about-content, .faq-item');
        if ('IntersectionObserver' in window) {
            var revealObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
            revealItems.forEach(function (item) {
                item.classList.add('reveal-on-scroll');
                revealObserver.observe(item);
            });
        } else {
            revealItems.forEach(function (item) { item.classList.add('is-visible'); });
        }
    } else {
        document.querySelectorAll('main section, main .card, main .about-image, main .about-content, .faq-item').forEach(function (item) {
            item.classList.add('is-visible');
        });
    }

    // Accessible interactive tabs for the About page.
    document.querySelectorAll('[data-tabs]').forEach(function (tabSet) {
        var tabs = Array.prototype.slice.call(tabSet.querySelectorAll('[role="tab"]'));
        var panels = Array.prototype.slice.call(tabSet.querySelectorAll('[role="tabpanel"]'));

        function activateTab(tab, moveFocus) {
            tabs.forEach(function (item) {
                var selected = item === tab;
                item.classList.toggle('is-active', selected);
                item.setAttribute('aria-selected', String(selected));
                item.tabIndex = selected ? 0 : -1;
            });
            panels.forEach(function (panel) {
                var selected = panel.id === tab.getAttribute('aria-controls');
                panel.hidden = !selected;
                panel.classList.toggle('is-active', selected);
            });
            if (moveFocus) tab.focus();
        }

        tabs.forEach(function (tab, index) {
            tab.addEventListener('click', function () { activateTab(tab, false); });
            tab.addEventListener('keydown', function (event) {
                var nextIndex = index;
                if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
                else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
                else if (event.key === 'Home') nextIndex = 0;
                else if (event.key === 'End') nextIndex = tabs.length - 1;
                else return;
                event.preventDefault();
                activateTab(tabs[nextIndex], true);
            });
        });
    });

    // A restrained gold cursor-follow accent for mouse/trackpad users only.
    // It is omitted on touch devices and when reduced motion is requested.
    var finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (finePointer && !reduceMotion) {
        var cursorGlow = document.createElement('span');
        cursorGlow.className = 'cursor-follow';
        cursorGlow.setAttribute('aria-hidden', 'true');
        document.body.appendChild(cursorGlow);
        var pointerX = -100;
        var pointerY = -100;
        var cursorX = pointerX;
        var cursorY = pointerY;
        var cursorFrame = null;

        document.addEventListener('pointermove', function (event) {
            pointerX = event.clientX;
            pointerY = event.clientY;
            cursorGlow.classList.add('is-active');
            if (cursorFrame === null) {
                cursorFrame = window.requestAnimationFrame(function updateCursor() {
                    cursorX += (pointerX - cursorX) * 0.18;
                    cursorY += (pointerY - cursorY) * 0.18;
                    cursorGlow.style.transform = 'translate3d(' + cursorX + 'px, ' + cursorY + 'px, 0) translate(-50%, -50%)';
                    if (Math.abs(pointerX - cursorX) > 0.2 || Math.abs(pointerY - cursorY) > 0.2) {
                        cursorFrame = window.requestAnimationFrame(updateCursor);
                    } else {
                        cursorFrame = null;
                    }
                });
            }
        }, { passive: true });

        document.addEventListener('pointerdown', function () { cursorGlow.classList.add('is-pressed'); });
        document.addEventListener('pointerup', function () { cursorGlow.classList.remove('is-pressed'); });
        document.addEventListener('pointerleave', function () { cursorGlow.classList.remove('is-active'); });
        document.addEventListener('pointerover', function (event) {
            if (event.target.closest('a, button, summary, input, select, textarea, [role="button"], [role="tab"]')) {
                cursorGlow.classList.add('is-hovering');
            }
        });
        document.addEventListener('pointerout', function (event) {
            if (event.target.closest('a, button, summary, input, select, textarea, [role="button"], [role="tab"]')) {
                cursorGlow.classList.remove('is-hovering');
            }
        });
    }


    // JavaScript-only validation and AJAX submission for the contact and product enquiry forms.
    document.querySelectorAll('.validated-form').forEach(function (form) {
        var status = form.querySelector('[data-form-status]');
        var submitButton = form.querySelector('[type="submit"]');
        var originalButtonText = submitButton ? submitButton.textContent : 'Submit';

        function validateField(field) {
            var value = field.value.trim();
            var message = '';
            var required = field.dataset.required === 'true';
            var minLength = Number(field.dataset.minLength || 0);
            var maxLength = Number(field.dataset.maxLength || 0);

            if (/[\u0000-\u001F\u007F]/.test(value)) {
                message = 'Please remove unsupported control characters.';
            } else if (required && !value) {
                message = 'Please complete this field.';
            } else if (value && field.dataset.rule === 'email' &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
                message = 'Please enter a valid email address.';
            } else if (value && field.dataset.rule === 'phone' &&
                (!/^[+0-9() .-]{7,20}$/.test(value) || (value.match(/[0-9]/g) || []).length < 7)) {
                message = 'Enter a phone number using 7 to 20 digits or phone symbols.';
            } else if (value && field.dataset.rule === 'integer' &&
                (!/^\d+$/.test(value) || Number(value) < Number(field.dataset.min) ||
                 Number(value) > Number(field.dataset.max))) {
                message = 'Enter a whole number between ' + field.dataset.min + ' and ' + field.dataset.max + '.';
            } else if (value && minLength && value.length < minLength) {
                message = 'Please enter at least ' + minLength + ' characters.';
            } else if (value && maxLength && value.length > maxLength) {
                message = 'Please use no more than ' + maxLength + ' characters.';
            }

            clearError(field);
            if (message) showError(field, message);
            return !message;
        }

        function clearError(field) {
            field.removeAttribute('aria-invalid');
            var describedBy = field.getAttribute('aria-describedby');
            if (describedBy && describedBy === field.id + '-error') {
                field.removeAttribute('aria-describedby');
            }
            var group = field.closest('.form-group');
            var error = group && group.querySelector('.field-error');
            if (error) error.remove();
        }

        function showError(field, message) {
            var group = field.closest('.form-group');
            if (!group) return;
            field.setAttribute('aria-invalid', 'true');
            var error = document.createElement('span');
            error.className = 'field-error';
            error.id = field.id + '-error';
            error.textContent = message;
            field.setAttribute('aria-describedby', error.id);
            group.appendChild(error);
        }

        function fields() {
            return Array.prototype.slice.call(
                form.querySelectorAll('input:not([type="hidden"]), select, textarea')
            );
        }

        function validateForm() {
            var firstInvalid = null;
            fields().forEach(function (field) {
                if (!validateField(field) && !firstInvalid) firstInvalid = field;
            });
            if (firstInvalid) {
                firstInvalid.focus();
                return false;
            }
            return true;
        }

        form.addEventListener('input', function (event) {
            if (event.target.matches('input, select, textarea')) validateField(event.target);
        });
        form.addEventListener('change', function (event) {
            if (event.target.matches('input, select, textarea')) validateField(event.target);
        });
        form.addEventListener('submit', async function (event) {
            event.preventDefault();
            if (!validateForm()) {
                status.textContent = 'Please correct the highlighted fields before submitting.';
                status.className = 'form-status is-error';
                status.focus();
                return;
            }

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
            }
            status.textContent = 'Sending your message securely...';
            status.className = 'form-status is-pending';

            try {
                var response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    mode: 'cors',
                    credentials: 'omit',
                    redirect: 'error',
                    referrerPolicy: 'strict-origin-when-cross-origin',
                    headers: { 'Accept': 'application/json' }
                });
                var result = await response.json();
                if (!response.ok || (result.success !== true && result.success !== 'true')) {
                    throw new Error(result.message || 'The form service could not accept your message.');
                }
                form.reset();
                fields().forEach(clearError);
                status.textContent = form.dataset.formType === 'enquiry'
                    ? 'Thank you for your product enquiry. Your details have been submitted successfully. Our team will contact you soon.'
                    : 'Thank you for contacting Motubatsi Luxury. Your message has been submitted successfully. Our team will get back to you soon.';
                status.className = 'form-status is-success';
                status.focus();
            } catch (error) {
                status.textContent = 'We could not submit your message. Please try again, or email info@Motubatsi.com directly. Your message has not been confirmed as sent.';
                status.className = 'form-status is-error';
                status.focus();
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                }
            }
        });
    });

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