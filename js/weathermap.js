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
let date;
let tempMin;
let tempMax;
let icon;
let description;
let humidity;
let wind;
let pressure;
let newArr = [];
let forcastDays = 5;


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

$.ajax({
    url: `https://api.openweathermap.org/data/2.5/forecast`,
    type: "GET",
    data: {
        appid: API_KEY,
        lat: 35.9838,
        lon: -80.02171,
        units: "imperial",
    }
}).done(function(data) {
    console.log(data);
    console.log(data.list[0].dt_txt.split(" ")[0]);
    console.log(`${data.list[0].main.temp_min}`);
    console.log(`${data.list[0].main.temp_max}`);
    console.log(data.list[0].weather[0].description);
    console.log(data.list[0].main.humidity);
    console.log(data.list[0].wind.speed);
    console.log(data.list[0].main.pressure);
    $("#weather-data").empty();
    data.list.forEach(function (unit) {
        if  (unit.dt_txt.split(" ")[1] === '00:00:00' && forcastDays !== 0) {
            date = unit.dt_txt.split(" ")[0];
            tempMin= `${unit.main.temp_min}`;
            tempMax = `${unit.main.temp_max}`;
            icon = unit.weather[0].icon;
            description = unit.weather[0].description;
            humidity = unit.main.humidity;
            wind = unit.wind.speed;
            pressure = unit.main.pressure;

            let html = "";
            html += '<div class="col card-header"><p class="mb-4 card-header">' + "<strong>" + date +"</strong>" + "</p>";
            html += '<p class="mb-2">' + "<strong>" + tempMin + '˚F' + "</strong>" + ' | ' + "<strong>" + tempMax + '˚F' + "</strong>" + '</p>';
            html += '<img src="http://openweathermap.org/img/w/' + icon + '.png">'
            html += '<p class="mb-2">' + 'Desciption: ' + "<strong>" + description + "</strong>" + '</p>';
            html += '<p class="mb-2">' + 'Humdidity: ' + "<strong>" + humidity + "</strong>" + '</p>';
            html += '<p class="mb-2"> ' + 'Wind: ' + "<strong>" + wind + "</strong>" + '</p>';
            html += '<p>' + 'Pressure: ' + "<strong>" + pressure + "</strong>" + '</p>';
            html += '</div>';

            $('#weather-data').append(html);
            forcastDays--;
        }
    })
})
this.marker = new mapboxgl.Marker();
this.
//
// console.log(fiveDayData);
//
// $("#searchBtn").click(function(e){
//     e.preventDefault();
//     console.log($("#searchBtn").val());
//     let inputStr = $("#searchBox").val();
// })

mapOnPageLoad();