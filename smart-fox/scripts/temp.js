import config from "../config.js";

window.addEventListener('load', () => {
    const weather_city = document.getElementById('weather-city');
    const weather_info = document.getElementById('weather-info');
    const weather_temp = document.getElementById('weather-temp');
    const weather_icon = document.getElementById('weather-icon');
    const weather_error = document.getElementById('weather-error');
    const api_key = config.weather_api_key;
    const country = config.your_country;
    const location = config.your_location;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

  fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                throw new Error(data.message);
            }
            const weather = data.weather[0].description;
            const temperature = Math.round(data.main.temp - 273.15);
            const weather_code = data.weather[0].icon;

            weather_info.innerHTML = `${weather}`;
            weather_temp.innerHTML = `<span style="color: #6d7072;">Feels like </span>${temperature}°C`;
            weather_icon.innerHTML = `<i class="fas ${get_icon(weather_code)}"></i>`;
            weather_city.innerHTML = location + ', ' + country
        })
        .catch(error => {
            weather_error.innerHTML = 'An error occurred while fetching the weather data.';
            console.log(error);
    });
});


function get_icon(code) {
    const icon_map = {
        '01d': 'fa-sun',
        '02d': 'fa-cloud-sun',
        '03d': 'fa-cloud',
        '04d': 'fa-cloud',
        '09d': 'fa-cloud-showers-heavy',
        '10d': 'fa-cloud-sun-rain',
        '11d': 'fa-bolt',
        '13d': 'fa-snowflake',
        '50d': 'fa-smog',
        '01n': 'fa-moon',
        '02n': 'fa-cloud-moon',
        '03n': 'fa-cloud',
        '04n': 'fa-cloud',
        '09n': 'fa-cloud-showers-heavy',
        '10n': 'fa-cloud-moon-rain',
        '11n': 'fa-bolt',
        '13n': 'fa-snowflake',
        '50n': 'fa-smog'
    };

    return icon_map[code] || 'fa-question';
}
