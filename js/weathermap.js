// require('dotenv').config()
//
// require('dotenv').config()
// console.log(process.env);
// const key = process.env.API_KEY;
//
// console.log("sanity check");
// -----weather objects made into html-----



// ----- map box -----

mapboxgl.accessToken = MAP_KEY;

let zoomSet = 15;
let defaultCenter = [-80.02171, 35.9838];

let html= '';
html += '';
html += '';

// let locationInput = $('#search-box').val();

function mapOnPageLoad() {
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: zoomSet,
        center: defaultCenter,
        });
}

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        }).then(function(data) {
            return data.features[0].center;
        });
}
// let coords = geocode(locationInput, MAP_KEY).then(function(result){
//     let locationInput = $('#search-box').val();
//     return result
// })
$('#searchBtn').click(function(e){
    e.preventDefault();
    let locationInput = $('#search-box').val();
    geocode(locationInput, MAP_KEY).then(function(result){
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: zoomSet,
            center: result,
        });
    });
})

//----- weather map -----

let myTown = "New Orleans";
console.log(`https://api.openweathermap.org/data/2.5/weather?q=${myTown}&appid=${API_KEY}`);

$.ajax(`https://api.openweathermap.org/data/2.5/forecast?q=${myTown}&appid=${API_KEY}`).done(function(data){
    console.log(data);
    console.log(data.list[0].dt_txt.split(" ")[0]);
    console.log(`${data.list[0].main.temp_min} ${data.list[0].main.temp_max}`);
    console.log(data.list[0].weather[0].description);
    console.log(data.list[0].main.humidity);
    console.log(data.list[0].wind.speed);
    console.log(data.list[0].main.pressure);

    // let weatherData = data.list[0].dt_txt.split(" ")[0];
    // let minMaxTemp = `${data.list[0].main.temp_min} ${data.list[0].main.temp_max}`;
    // let weatherDescription = data.list[0].weather[0].description;
    // let weatherHumidity = data.list[0].main.humidity;
    // let weatherSpeed = data.list[0].wind.speed;
    // let weatherPressure = data.list[0].main.pressure;
})
//
// console.log(fiveDayData);
//
// $("#searchBtn").click(function(e){
//     e.preventDefault();
//     console.log($("#searchBtn").val());
//     let inputStr = $("#searchBox").val();
// })

mapOnPageLoad();