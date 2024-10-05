window.addEventListener('load', () => {
    const weather_city = document.getElementById('weather-city');
    const weather_info = document.getElementById('weather-info');
    const weather_temp = document.getElementById('weather-temp');
    const weather_icon = document.getElementById('weather-icon');
    const weather_error = document.getElementById('weather-error');

    /* ==========================================
    WEATHER INFORMATION CONFIG
    ========================================== */

    const api_key = ''; //Example (put your openweathermap.org API key here)
    const country = 'UK'; //Example
    const location = 'London'; //Example

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
            weather_temp.innerHTML = `<span id="feels-like" style="color: #6d7072;">Feels like </span>${temperature}°C`;
            const iconData = get_icon(weather_code);
            weather_icon.innerHTML = `<i class="fas ${iconData.icon} ${iconData.color_class}"></i>`;
            weather_city.innerHTML = location + ', ' + country;
        })
        .catch(error => {
            weather_error.innerHTML = 'An error occurred while fetching the weather data.';
            console.log(error);
    });
});


function get_icon(code) {
    const icon_map = {
        '01d': { icon: 'fa-sun', color_class: 'sunny' },
        '02d': { icon: 'fa-cloud-sun', color_class: 'cloudy' },
        '03d': { icon: 'fa-cloud', color_class: 'cloudy' },
        '04d': { icon: 'fa-cloud', color_class: 'cloudy' },
        '09d': { icon: 'fa-cloud-showers-heavy', color_class: 'rainy' },
        '10d': { icon: 'fa-cloud-sun-rain', color_class: 'rainy' },
        '11d': { icon: 'fa-bolt', color_class: 'cloudy' },
        '13d': { icon: 'fa-snowflake', color_class: 'cloudy' },
        '50d': { icon: 'fa-smog', color_class: 'foggy' },
        '01n': { icon: 'fa-moon', color_class: 'default' },
        '02n': { icon: 'fa-cloud-moon', color_class: 'cloudy' },
        '03n': { icon: 'fa-cloud', color_class: 'cloudy' },
        '04n': { icon: 'fa-cloud', color_class: 'cloudy' },
        '09n': { icon: 'fa-cloud-showers-heavy', color_class: 'rainy' },
        '10n': { icon: 'fa-cloud-moon-rain', color_class: 'rainy' },
        '11n': { icon: 'fa-bolt', color_class: 'bolt' },
        '13n': { icon: 'fa-snowflake', color_class: 'snowy' },
        '50n': { icon: 'fa-smog', color_class: 'foggy' }
    };

    return icon_map[code] || { icon: 'fa-question', color_class: 'default-weather' };
}
