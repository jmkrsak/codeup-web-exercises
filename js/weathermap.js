// require('dotenv').config()
//
// require('dotenv').config()
// console.log(process.env);
// const key = process.env.API_KEY;
//
// console.log("sanity check");

// ----- map box -----

mapboxgl.accessToken = MAP_KEY;

geocode("2111 Kirkwood St, High Point, NC 27262", MAP_KEY).then(function(result){
    console.log(result)
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 15,
        center: result,
    });
    const marker = new mapboxgl.Marker()
        .setLngLat(result)
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Korean BBQ</h1>"))
        .addTo(map);
});

// ----- weather map -----

console.log(API_KEY);

let myTown = "New Orleans";
console.log(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}`);

$.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${myTown}&appid=${API_KEY}`).done(function(data){
    console.log(data);
})

$("#searchBtn").click(function(e){
    e.preventDefault();
    console.log($("#searchBtn").val());

    let inputStr = $("#searchBox").val();


})

