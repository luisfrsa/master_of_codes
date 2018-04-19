var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("O navegador não possui suporte à Geolocalização.");
    }
}
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}

// https://api.teleport.org/api/locations/-23.418137599999998,-51.9342009/?embed=location:nearest-cities/location:nearest-city/city:timezone/tz:offsets-now%20|%20jq%20%27._embedded.%22location:nearest-cities%22[0]._embedded.%22location:nearest-city%22._embedded.%22city:timezone%22%27