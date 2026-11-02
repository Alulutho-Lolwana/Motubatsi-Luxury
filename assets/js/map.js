// House of Motubatsi — interactive office map.
// Uses locally stored Leaflet 1.9.4 and OpenStreetMap tiles.
// The guarded setup follows the approach used in Campus-Cart.
(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        var mapElement = document.getElementById("office-map");

        // Safe to load on every page: do nothing where no map is present.
        if (!mapElement) {
            return;
        }

        // Show a useful message if Leaflet did not load.
        if (typeof L === "undefined") {
            mapElement.textContent = "The map could not be loaded. Please use the office address shown on this page.";
            mapElement.classList.add("map-unavailable");
            return;
        }

        // Coordinates retained from the map previously embedded on this page.
        var officeCoordinates = [-33.9511372, 25.5583928];

        // Keep scroll-wheel zoom off until the map receives keyboard focus.
        var map = L.map(mapElement, {
            scrollWheelZoom: false
        }).setView(officeCoordinates, 15);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        }).addTo(map);

        map.on("focus", function () {
            map.scrollWheelZoom.enable();
        });
        map.on("blur", function () {
            map.scrollWheelZoom.disable();
        });

        // Create popup text safely with DOM methods rather than HTML strings.
        var popup = document.createElement("div");
        popup.className = "map-popup";

        var title = document.createElement("strong");
        title.textContent = "House of Motubatsi";
        popup.appendChild(title);

        var address = document.createElement("p");
        address.textContent = "123 Kei Apple, Fairview, Gqeberha";
        popup.appendChild(address);

        L.marker(officeCoordinates, {
            title: "House of Motubatsi office",
            alt: "House of Motubatsi office location"
        }).addTo(map).bindPopup(popup);

        // Recalculate dimensions after resize or mobile-device rotation.
        window.addEventListener("resize", function () {
            map.invalidateSize();
        });
        window.setTimeout(function () {
            map.invalidateSize();
        }, 150);
    });
}());
