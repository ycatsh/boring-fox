window.addEventListener('load', () => {
    const weather_info = document.getElementById('weather-info');
    const weather_icon = document.getElementById('weather-icon');
    const api_key = 'KEY'; //Example (put your API key here)
    const location = 'London'; //Example (change this to your city)

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

      weather_info.innerHTML = `${weather}, feels like ${temperature}°C`;
      weather_icon.innerHTML = `<i class="fas ${get_icon(weather_code)}"></i>`;

    })
    .catch(error => {
        weather_info.innerHTML = 'An error occurred while fetching the weather data.';
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
