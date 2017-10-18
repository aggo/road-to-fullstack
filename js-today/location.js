function showPosition(position) {
    document.getElementById('location-result').innerHTML =
        `Copy to maps: ${position.coords.latitude},${position.coords.longitude}` +
        `<br>Latitude: ${position.coords.latitude}` +
        `<br>Longitude: ${position.coords.longitude}`;
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, alert);
    } else {
        document.getElementById('location-result').innerHTML = 'Geolocation is not supported by this browser.';
    }
}
