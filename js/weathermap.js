// ----- map api key
mapboxgl.accessToken = MAP_KEY;
// ----- variables used
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
// ----- creating stock map on my location from mapbox
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: zoomSet,
    center: defaultCenter,
});danis
// ----- creates in map search bar
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: false,
});
// ----- getting location data based on marker
map.addControl(geocoder);
marker = new mapboxgl.Marker();
map.on('click', function (e) {
    presentMap(e.lngLat)
})
// ----- generate map and forcast using marker selection
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
    let forcastDays = 5;
    // ----- using data from stock map to generate forcast
    $('#weather-data').empty()
    // ----- adding city country to forcast cards
    let localInfo = `${data.city.name}, ${data.city.country}`
    // ----- creating if statments to change background based on temperature
    if (data.list[0].main.temp_min > 90) {
        $('body').css('background-color', 'red');
    } else if (data.list[0].main.temp_min > 70) {
        $('body').css('background-color', 'orange');
    } else if (data.list[0].main.temp_min > 50) {
        $('body').css('background-color', 'yellow');
    } else if (data.list[0].main.temp_min > 30) {
        $('body').css('background-color', 'blue');
    } else {
        $('body').css('background-color', 'white');
    }
    // ----- creating vars to later use to generate forcast cards
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
            // ----- adding var forcast data to cards
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
            // ----- appending html to data using forcastDays to make 5 cards
            $('#weather-data').append(html);
            forcastDays--;
        }
    })
})
// ----- generate map and forcast using marker selection
function presentMap(input) {
    let forcastDays = 5;
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
        // ----- using data from marker selection to generate forcast
        $('#weather-data').empty()
        // ----- adding city country to forcast cards
        let localInfo = `${data.city.name}, ${data.city.country}`
        // ----- creating if statments to change background based on temperature
        if (data.list[0].main.temp_min > 90) {
            $('body').css('background-color', 'red');
        } else if (data.list[0].main.temp_min > 70) {
            $('body').css('background-color', 'orange');
        } else if (data.list[0].main.temp_min > 50) {
            $('body').css('background-color', 'yellow');
        } else if (data.list[0].main.temp_min > 30) {
            $('body').css('background-color', 'blue');
        } else {
            $('body').css('background-color', 'white');
        }
        // ----- creating vars to later use to generate forcast cards
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
                // ----- adding var forcast data to cards
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
                // ----- appending html to data using forcastDays to make 5 cards
                $('#weather-data').append(html);
                forcastDays--;
            }
        })
    })
}
// ----- setting to use in map text input
geocoder.on('result', function(e) {
    srcInput(e.result.center)
})
// ----- generate map and forcast using maps texts inputs
function srcInput(input) {
    let forcastDays = 5;
    marker.setLngLat(input).addTo(map);
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
        // ----- using data from map text input to generate forcast
        $('#weather-data').empty()
        // ----- adding city country to forcast cards
        let localInfo = `${data.city.name}, ${data.city.country}`
        // ----- creating if statments to change background based on temperature
        if (data.list[0].main.temp_min > 90) {
            $('body').css('background-color', 'red');
        } else if (data.list[0].main.temp_min > 70) {
            $('body').css('background-color', 'orange');
        } else if (data.list[0].main.temp_min > 50) {
            $('body').css('background-color', 'yellow');
        } else if (data.list[0].main.temp_min > 30) {
            $('body').css('background-color', 'blue');
        } else {
            $('body').css('background-color', 'white');
        }
        // ----- creating vars to later use to generate forcast cards
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
                // ----- adding var forcast data to cards
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
                // ----- appending html to data using forcastDays to make 5 cards
                $('#weather-data').append(html);
                forcastDays--;
            }
        })
    })
}
