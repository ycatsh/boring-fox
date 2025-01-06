window.addEventListener('load', () => {
    const weatherCity = document.getElementById('weather-city');
    const weatherInfo = document.getElementById('weather-info');
    const weatherTemp = document.getElementById('weather-temp');
    const weatherIcon = document.getElementById('weather-icon');
    const weatherError = document.getElementById('weather-error');
    
    /* ==========================================
    WEATHER INFORMATION CONFIG
    ========================================== */
    
    const apiKey = ''; //Example (put your openweathermap.org API key here)
    const country = 'UK'; //Example
    const location = 'London'; //Example
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod !== 200) {
            throw new Error(data.message);
        }
        const weather = data.weather[0].description;
        const temperature = Math.round(data.main.temp - 273.15);
        const weatherCode = data.weather[0].icon;
        
        weatherCity.innerHTML = `${location}, ${country}`;
        
        const iconData = getIcon(weatherCode);
        weatherIcon.innerHTML = `<img src="${iconData.png}" style="width: 48px; height: 48px;">`;
        weatherInfo.innerHTML = `${weather}`;
        
        weatherTemp.innerHTML = `<div id="feels-like" style="color: #6d7072;">Feels like </div>
                                 <div id="temp">${temperature}°C</div>`;
    })
    .catch(error => {
        weatherError.innerHTML = 'An error occurred while fetching the weather<br><br>Check your API key';
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
