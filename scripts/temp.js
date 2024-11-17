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

            weather_city.innerHTML = `${location}, ${country}`;

            const iconData = get_icon(weather_code);
            weather_icon.innerHTML = `<img src="${iconData.png}" style="width: 48px; height: 48px;">`;
            weather_info.innerHTML = `${weather}`;

            weather_temp.innerHTML = `<div id="feels-like" style="color: #6d7072;">Feels like </div>
                                      <div id="temp">${temperature}°C</div>`;
        })
        .catch(error => {
            weather_error.innerHTML = 'An error occurred while fetching the weather<br><br>Check your API key';
            console.log(error);
    });
});


function get_icon(code) {
    const icon_map = {
        '01d': { png: 'static/assets/icons/sun.png'},
        '02d': { png: 'static/assets/icons/cloud-sun.png'},
        '03d': { png: 'static/assets/icons/cloud.png'},
        '04d': { png: 'static/assets/icons/cloud.png'},
        '09d': { png: 'static/assets/icons/cloud-rain.png'},
        '10d': { png: 'static/assets/icons/cloud-sun-rain.png'},
        '11d': { png: 'static/assets/icons/bolt.png'},
        '13d': { png: 'static/assets/icons/snowflake.png'},
        '50d': { png: 'static/assets/icons/smog.png'},
        '01n': { png: 'static/assets/icons/moon.png'},
        '02n': { png: 'static/assets/icons/cloud-moon.png'},
        '03n': { png: 'static/assets/icons/cloud.png'},
        '04n': { png: 'static/assets/icons/cloud.png'},
        '09n': { png: 'static/assets/icons/cloud-rain.png'},
        '10n': { png: 'static/assets/icons/cloud-moon-rain.png'},
        '11n': { png: 'static/assets/icons/bolt.png'},
        '13n': { png: 'static/assets/icons/snowflake.png'},
        '50n': { png: 'static/assets/icons/smog.png'}
    };

    return icon_map[code] || { png: 'static/assets/icons/question.png'};
}
