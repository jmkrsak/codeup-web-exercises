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
let defaultCenter = [-79.32971, 36.02948];
let date;
let tempMin;
let tempMax;
let icon;
let description;
let humidity;
let wind;
let pressure;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: zoomSet,
    center: defaultCenter,
});
const geocoder = new MapboxGeocoder({
// Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
});
map.addControl(geocoder);
marker = new mapboxgl.Marker();
map.on('click', function (e) {
    console.log(e)
    presentMap(e.lngLat)
})
let forcastDays = 5;
$.ajax({
    url: `https://api.openweathermap.org/data/2.5/forecast`,
    type: "GET",
    data: {
        appid: API_KEY,
        lat: 36.02948,
        lon: -79.32971,
        units: "imperial",
    }
}).done(function (data) {
    $('#weather-data').empty()
    console.log(data)
    let localInfo = `${data.city.name}, ${data.city.country}`
    if (data.list[0].main.temp_min > 90) {
        console.log(data.list[0].main.temp_min)
        $('body').css('background-color', 'red');
    } else if (data.list[0].main.temp_min > 70) {
        console.log(data.list[0].main.temp_min)
        $('body').css('background-color', 'orange');
    } else if (data.list[0].main.temp_min > 50) {
        console.log(data.list[0].main.temp_min)
        $('body').css('background-color', 'yellow');
    } else if (data.list[0].main.temp_min > 30) {
        console.log(data.list[0].main.temp_min)
        $('body').css('background-color', 'blue');
    } else {
        console.log(data.list[0].main.temp_min)
        $('body').css('background-color', 'white');
    }
    data.list.forEach(function (unit) {
        if (unit.dt_txt.split(" ")[1] === '00:00:00' && forcastDays !== 0) {
            date = unit.dt_txt.split(" ")[0];
            tempMin = `${unit.main.temp_min}`;
            tempMax = `${unit.main.temp_max}`;
            icon = unit.weather[0].icon;
            description = unit.weather[0].description;
            humidity = unit.main.humidity;
            wind = unit.wind.speed;
            pressure = unit.main.pressure;

            let html = "";
            html += '<div class="container-fluid d-flex col-auto me-auto justify-content-center mb-3">'
            html += '<div class="card card-header">'
            html += '<p class="mb-4 card-header">' + "<strong>" + localInfo + "</strong>" + "</p>";
            html += '<p class="mb-4 card-header">' + "<strong>" + date + "</strong>" + "</p>";
            html += '<p class="mb-2">' + "High: " + "<strong>" + tempMin + '˚F' + "</strong>" + '</p>';
            html += '<p class="mb-2">' + "low: " + "<strong>" + tempMax + '˚F' + "</strong>" + '</p>';
            html += '<img src="http://openweathermap.org/img/w/' + icon + '.png">'
            html += '<p class="mb-2">' + 'Desciption: ' + '</p>';
            html += '<p class="mb-2">' + "<strong>" + description + "</strong>" + '</p>';
            html += '<p class="mb-2">' + 'Humdidity: ' + '</p>';
            html += '<p class="mb-2">' + "<strong>" + humidity + "</strong>" + '</p>';
            html += '<p class="mb-2"> ' + 'Wind: ' + "<strong>" + wind + "</strong>" + '</p>';
            html += '<p class ="mb-2">' + 'Pressure: ' + '</p>';
            html += '<p>' + "<strong>" + pressure + "</strong>" + '</p>';
            html += '</div>';
            html += '</div>';

            $('#weather-data').append(html);
            forcastDays--;
        }
    })
})
//----- weather map -----
function presentMap(input) {
    let forcastDays = 5;
    console.log(input)
    marker.setLngLat(input).addTo(map)
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast`,
        type: "GET",
        data: {
            appid: API_KEY,
            lat: input.lat,
            lon: input.lng,
            units: "imperial",
        }
    }).done(function (data) {
        $('#weather-data').empty()
        let localInfo = `${data.city.name}, ${data.city.country}`
        if (data.list[0].main.temp_min > 90) {
            console.log(data.list[0].main.temp_min)
            $('body').css('background-color', 'red');
        } else if (data.list[0].main.temp_min > 70) {
            console.log(data.list[0].main.temp_min)
            $('body').css('background-color', 'orange');
        } else if (data.list[0].main.temp_min > 50) {
            console.log(data.list[0].main.temp_min)
            $('body').css('background-color', 'yellow');
        } else if (data.list[0].main.temp_min > 30) {
            console.log(data.list[0].main.temp_min)
            $('body').css('background-color', 'blue');
        } else {
            console.log(data.list[0].main.temp_min)
            $('body').css('background-color', 'white');
        }
        data.list.forEach(function (unit) {
            if (unit.dt_txt.split(" ")[1] === '00:00:00' && forcastDays !== 0) {
                date = unit.dt_txt.split(" ")[0];
                tempMin = `${unit.main.temp_min}`;
                tempMax = `${unit.main.temp_max}`;
                icon = unit.weather[0].icon;
                description = unit.weather[0].description;
                humidity = unit.main.humidity;
                wind = unit.wind.speed;
                pressure = unit.main.pressure;

                let html = "";
                html += '<div class="container-fluid d-flex col-auto me-auto justify-content-center mb-3">'
                html += '<div class="card card-header">'
                html += '<p class="mb-4 card-header">' + "<strong>" + localInfo + "</strong>" + "</p>";
                html += '<p class="mb-4 card-header">' + "<strong>" + date + "</strong>" + "</p>";
                html += '<p class="mb-2">' + "High: " + "<strong>" + tempMin + '˚F' + "</strong>" + '</p>';
                html += '<p class="mb-2">' + "low: " + "<strong>" + tempMax + '˚F' + "</strong>" + '</p>';
                html += '<img src="http://openweathermap.org/img/w/' + icon + '.png">'
                html += '<p class="mb-2">' + 'Desciption: ' + '</p>';
                html += '<p class="mb-2">' + "<strong>" + description + "</strong>" + '</p>';
                html += '<p class="mb-2">' + 'Humdidity: ' + '</p>';
                html += '<p class="mb-2">' + "<strong>" + humidity + "</strong>" + '</p>';
                html += '<p class="mb-2"> ' + 'Wind: ' + "<strong>" + wind + "</strong>" + '</p>';
                html += '<p class ="mb-2">' + 'Pressure: ' + '</p>';
                html += '<p>' + "<strong>" + pressure + "</strong>" + '</p>';
                html += '</div>';
                html += '</div>';

                $('#weather-data').append(html);
                forcastDays--;
            }
        })
    })
}
// $('#search').on("change",srcInput);
// $('#submitBtn').click(function (e){
//     e.preventDefault();
//     console.log(e);
// })
geocoder.on('result', function(e) {
    console.log(e)
    srcInput(e.result.center)
})
function srcInput(input) {
    let forcastDays = 5;
    console.log(input)
        marker.setLngLat(input).addTo(map);
        console.log(input);
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast`,
            type: "GET",
            data: {
                appid: API_KEY,
                lat: input[1],
                lon: input[0],
                units: "imperial",
            }
        }).done(function (data) {
            $('#weather-data').empty()
            let localInfo = `${data.city.name}, ${data.city.country}`
            if (data.list[0].main.temp_min > 90) {
                console.log(data.list[0].main.temp_min)
                $('body').css('background-color', 'red');
            } else if (data.list[0].main.temp_min > 70) {
                console.log(data.list[0].main.temp_min)
                $('body').css('background-color', 'orange');
            } else if (data.list[0].main.temp_min > 50) {
                console.log(data.list[0].main.temp_min)
                $('body').css('background-color', 'yellow');
            } else if (data.list[0].main.temp_min > 30) {
                console.log(data.list[0].main.temp_min)
                $('body').css('background-color', 'blue');
            } else {
                console.log(data.list[0].main.temp_min)
                $('body').css('background-color', 'white');
            }
            data.list.forEach(function (unit) {
                if (unit.dt_txt.split(" ")[1] === '00:00:00' && forcastDays !== 0) {
                    date = unit.dt_txt.split(" ")[0];
                    tempMin = `${unit.main.temp_min}`;
                    tempMax = `${unit.main.temp_max}`;
                    icon = unit.weather[0].icon;
                    description = unit.weather[0].description;
                    humidity = unit.main.humidity;
                    wind = unit.wind.speed;
                    pressure = unit.main.pressure;

                    let html = "";
                    html += '<div class="container-fluid d-flex col-auto me-auto justify-content-center mb-3">'
                    html += '<div class="card card-header">'
                    html += '<p class="mb-4 card-header">' + "<strong>" + localInfo + "</strong>" + "</p>";
                    html += '<p class="mb-4 card-header">' + "<strong>" + date + "</strong>" + "</p>";
                    html += '<p class="mb-2">' + "High: " + "<strong>" + tempMin + '˚F' + "</strong>" + '</p>';
                    html += '<p class="mb-2">' + "low: " + "<strong>" + tempMax + '˚F' + "</strong>" + '</p>';
                    html += '<img src="http://openweathermap.org/img/w/' + icon + '.png">'
                    html += '<p class="mb-2">' + 'Desciption: ' + '</p>';
                    html += '<p class="mb-2">' + "<strong>" + description + "</strong>" + '</p>';
                    html += '<p class="mb-2">' + 'Humdidity: ' + '</p>';
                    html += '<p class="mb-2">' + "<strong>" + humidity + "</strong>" + '</p>';
                    html += '<p class="mb-2"> ' + 'Wind: ' + "<strong>" + wind + "</strong>" + '</p>';
                    html += '<p class ="mb-2">' + 'Pressure: ' + '</p>';
                    html += '<p>' + "<strong>" + pressure + "</strong>" + '</p>';
                    html += '</div>';
                    html += '</div>';

                    $('#weather-data').append(html);
                    forcastDays--;
            }
        })
    })
}
