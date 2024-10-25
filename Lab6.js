function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

var lat1 = getRandomInRange(30, 35, 3);
var lat2 = getRandomInRange(30, 35, 3);
var lat3 = getRandomInRange(30, 35, 3);

var long1 = getRandomInRange(-90, -100, 3);
var long2 = getRandomInRange(-90, -100, 3);
var long3 = getRandomInRange(-90, -100, 3);

function createMap(){
    var map = L.map('map').setView([38.7946, -99.5348], 4);//long, lat, zoom

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker1 = L.marker([lat1, long1]).addTo(map);
    var marker2 = L.marker([lat2, long2]).addTo(map);
    var marker3 = L.marker([lat3, long3]).addTo(map);


    document.getElementById("marker1").innerHTML = "Marker 1: Latitude: "+lat1+", Longitude: "+long1;
    document.getElementById("marker2").innerHTML = "Marker 2: Latitude: "+lat2+", Longitude: "+long2;
    document.getElementById("marker3").innerHTML = "Marker 3: Latitude: "+lat3+", Longitude: "+long3;
}

function locality1(){
    const latitude1 = lat1;
    const longitude1 = long1;
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude1}&longitude=${longitude1}&localityLanguage=en`)
        .then((res) => res.json())
        .then((resJson) => {
            console.log("Locality 1: ", resJson.locality);
            document.getElementById("local1").innerHTML = `Locality: ${resJson.locality}`;
        })
        
}

function locality2(){
    const latitude2 = lat2;
    const longitude2 = long2;
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude2}&longitude=${longitude2}&localityLanguage=en`)
        .then((res) => res.json())
        .then((resJson) => {
            console.log("Locality 2: ", resJson.locality);
            document.getElementById("local2").innerHTML = `Locality: ${resJson.locality}`;
        })
        
}

function locality3(){
    const latitude3 = lat3;
    const longitude3 = long3;
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude3}&longitude=${longitude3}&localityLanguage=en`)
        .then((res) => res.json())
        .then((resJson) => {
            console.log("Locality 3: ", resJson.locality);
            document.getElementById("local3").innerHTML = `Locality: ${resJson.locality}`;
        })
        
}

window.onload = createMap;
locality1();
locality2();
locality3();