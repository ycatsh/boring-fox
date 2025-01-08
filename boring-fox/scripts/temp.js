window.addEventListener('load', () => {
    const weatherCity = document.getElementById('weather-city');
    const weatherInfo = document.getElementById('weather-info');
    const weatherTemp = document.getElementById('weather-temp');
    const weatherIcon = document.getElementById('weather-icon');
    const weatherStats = document.getElementById('weather-stats');
    const weatherError = document.getElementById('weather-error');
    const weatherForecast = document.getElementById('weather-forecast')
    const timelineTemp = document.getElementById('temp')

    /* ==========================================
        WEATHER INFORMATION CONFIG
    ========================================== */

    const apiKey = ''; // Example
    const country = 'UK'; // Example
    const location = 'London'; // Example

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;

    // Fetch current weather and forecast
    Promise.all([fetch(url), fetch(forecastUrl)])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(([currentData, forecastData]) => {
            if (currentData.cod !== 200 || forecastData.cod !== "200") {
                throw new Error("Error fetching weather data.");
            }

            // Current weather data
            const weather = currentData.weather[0].description;
            const temperature = Math.round(currentData.main.temp - 273.15);
            const weatherCode = currentData.weather[0].icon;
            const humidity = currentData.main.humidity;
            const windSpeed = Math.round(currentData.wind.speed * 3.6);
            const iconData = getIcon(weatherCode);

            weatherCity.innerHTML = `${location}, ${country}`;
            weatherIcon.innerHTML = `<img src="${iconData.png}" style="width: 48px; height: 48px;">`;
            weatherInfo.innerHTML = `${weather}`;
            weatherTemp.innerHTML = `<div style="color: #6d7072;">Temperature </div>
                                      <div>${temperature}°C</div>`;
            weatherStats.innerHTML = `<div>Humidity: ${humidity}% </div>
                                       <div>Wind: ${windSpeed} km/h</div>`;
            timelineTemp.innerHTML = `${temperature}°C <img src="${iconData.png}" style="width: 24px; height: 24px; filter: grayscale(100%);">`;

            // Forecast data
            const forecast = forecastData.list;
            const dailyForecast = {};

            forecast.forEach(item => {
                const day = getDay(item.dt_txt.split(' ')[0]).slice(0, 3);

                if (!dailyForecast[day]) {
                    dailyForecast[day] = { dayTemp: '?', nightTemp: '?' };
                }
                
                // Day and night
                const timeOfDay = item.dt_txt.split(' ')[1];
                if (timeOfDay === '12:00:00') {
                    dailyForecast[day].dayTemp = Math.round(item.main.temp - 273.15);
                } else if (timeOfDay === '00:00:00') {
                    dailyForecast[day].nightTemp = Math.round(item.main.temp - 273.15);
                }
            });

            // Display forecast
            for (const [day, temps] of Object.entries(dailyForecast)) {
                const weatherCode = forecast.find(item => getDay(item.dt_txt.split(' ')[0]).slice(0, 3) === day).weather[0].icon;
                const iconData = getIcon(weatherCode);

                const forecastElement = document.createElement('div');
                forecastElement.innerHTML = `
                    <div id="forecast">
                        <div id="forecast-days">${day}</div>
                        <img id="forecast-icon" src="${iconData.png}" style="width: 42px; height: 42px;">
                        <div id="forecast-temp">${temps.dayTemp}&#176&nbsp&nbsp<span id="night-temp">${temps.nightTemp}&#176</span></div>
                    </div>
                `;
                weatherForecast.appendChild(forecastElement);
            }
        })
        .catch(error => {
            weatherError.innerHTML = 'An error occurred while fetching the weather or forecast data.<br><br>Check your API key.';
            console.log(error);
        });
});


function getIcon(code) {
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

function getDay(date_string) {
    const date = new Date(date_string);
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}