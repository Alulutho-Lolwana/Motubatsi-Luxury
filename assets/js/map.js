// Interactive map for the House of Motubatsi Contact page.
document.addEventListener('DOMContentLoaded', function () {
    var mapElement = document.getElementById('office-map');

    if (!mapElement || typeof L === 'undefined') {
        return;
    }

    // Coordinates are retained from the Google Maps embed already present
    // on the Contact page before this interactive map was added.
    var map = L.map('office-map').setView([-33.9511372, 25.5583928], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-33.9511372, 25.5583928]).addTo(map)
        .bindPopup('<strong>House of Motubatsi</strong><br>Location retained from the previous Contact page map.<br><small>Please confirm the exact visitor address before travelling.</small>');

    window.addEventListener('resize', function () {
        map.invalidateSize();
    });
});
