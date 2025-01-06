window.addEventListener('load', () => {
    const weather_city = document.getElementById('weather-city');
    const weather_info = document.getElementById('weather-info');
    const weather_temp = document.getElementById('weather-temp');
    const weather_icon = document.getElementById('weather-icon');
    const weather_stats = document.getElementById('weather-stats');
    const weather_error = document.getElementById('weather-error');
    const weather_forecast = document.getElementById('weather-forecast')

    const time_line_temp = document.getElementById('temp')

    /* ==========================================
        WEATHER INFORMATION CONFIG
    ========================================== */

    const api_key = ''; // Example
    const country = 'UK'; // Example
    const location = 'London'; // Example

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;
    const forecast_url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${api_key}`;

    // Fetch current weather and forecast
    Promise.all([fetch(url), fetch(forecast_url)])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(([currentData, forecastData]) => {
            if (currentData.cod !== 200 || forecastData.cod !== "200") {
                throw new Error("Error fetching weather data.");
            }

            // Current weather data
            const weather = currentData.weather[0].description;
            const temperature = Math.round(currentData.main.temp - 273.15);
            const weather_code = currentData.weather[0].icon;
            const humidity = currentData.main.humidity;
            const windSpeed = Math.round(currentData.wind.speed * 3.6);
            const icon_data = get_icon(weather_code);

            weather_city.innerHTML = `${location}, ${country}`;
            weather_icon.innerHTML = `<img src="${icon_data.png}" style="width: 48px; height: 48px;">`;
            weather_info.innerHTML = `${weather}`;
            weather_temp.innerHTML = `<div style="color: #6d7072;">Temperature </div>
                                      <div>${temperature}°C</div>`;
            weather_stats.innerHTML = `<div>Humidity: ${humidity}% </div>
                                       <div>Wind: ${windSpeed} km/h</div>`;
            time_line_temp.innerHTML = `${temperature}°C <img src="${icon_data.png}" style="width: 24px; height: 24px; filter: grayscale(100%);">`;

            // Forecast data
            const forecast = forecastData.list;
            const daily_forecast = {};

            forecast.forEach(item => {
                const day = get_day(item.dt_txt.split(' ')[0]).slice(0, 3);

                if (!daily_forecast[day]) {
                    daily_forecast[day] = { dayTemp: null, nightTemp: null };
                }
                
                // Day and night
                const timeOfDay = item.dt_txt.split(' ')[1];
                if (timeOfDay === '12:00:00') {
                    daily_forecast[day].dayTemp = Math.round(item.main.temp - 273.15);
                } else if (timeOfDay === '00:00:00') {
                    daily_forecast[day].nightTemp = Math.round(item.main.temp - 273.15);
                }
            });

            // Display forecast
            for (const [day, temps] of Object.entries(daily_forecast)) {
                const weather_code = forecast.find(item => get_day(item.dt_txt.split(' ')[0]).slice(0, 3) === day).weather[0].icon;
                const icon_data = get_icon(weather_code);

                const forecast_element = document.createElement('div');
                forecast_element.innerHTML = `
                    <div id="forecast">
                        <div id="forecast-days">${day}</div>
                        <img id="forecast-icon" src="${icon_data.png}" style="width: 42px; height: 42px;">
                        <div id="forecast-temp">${temps.dayTemp}&#176&nbsp&nbsp<span id="night-temp">${temps.nightTemp}&#176</span></div>
                    </div>
                `;
                weather_forecast.appendChild(forecast_element);
            }
        })
        .catch(error => {
            weather_error.innerHTML = 'An error occurred while fetching the weather or forecast data.<br><br>Check your API key.';
            console.log(error);
        });
});


function get_icon(code) {
    const iconMap = {
        '01d': { png: 'static/assets/icons/sun.png' },
        '02d': { png: 'static/assets/icons/cloud-sun.png' },
        '03d': { png: 'static/assets/icons/cloud.png' },
        '04d': { png: 'static/assets/icons/cloud.png' },
        '09d': { png: 'static/assets/icons/cloud-rain.png' },
        '10d': { png: 'static/assets/icons/cloud-sun-rain.png' },
        '11d': { png: 'static/assets/icons/bolt.png' },
        '13d': { png: 'static/assets/icons/snowflake.png' },
        '50d': { png: 'static/assets/icons/smog.png' },
        '01n': { png: 'static/assets/icons/moon.png' },
        '02n': { png: 'static/assets/icons/cloud-moon.png' },
        '03n': { png: 'static/assets/icons/cloud.png' },
        '04n': { png: 'static/assets/icons/cloud.png' },
        '09n': { png: 'static/assets/icons/cloud-rain.png' },
        '10n': { png: 'static/assets/icons/cloud-moon-rain.png' },
        '11n': { png: 'static/assets/icons/bolt.png' },
        '13n': { png: 'static/assets/icons/snowflake.png' },
        '50n': { png: 'static/assets/icons/smog.png' }
    };
    
    return iconMap[code] || { png: 'static/assets/icons/question.png' };
}

function get_day(date_string) {
    const date = new Date(date_string);
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}