function initMap() {
    const paris = { lat: 48.864716, lng: 2.349014 };
    const londres = { lat: 51.508129, lng: -0.1278 };
    const madrid = { lat: 40.4167, lng: -3.70325 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: paris, madrid, londres,
    });

    const markerForParis = new google.maps.Marker({
        position: paris,
        map: map,
    });

    const markerForLondres = new google.maps.Marker({
        position: londres,
        map: map,
    });

    const markerForMadrid = new google.maps.Marker({
        position: madrid,
        map: map,
    });
} 

window.initMap = initMap;
