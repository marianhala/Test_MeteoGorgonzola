const apiKey = '8867b17d9139fb6140dc0d31c117588c'; // Replace with your OpenWeatherMap API key
const city = 'Gorgonzola';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},IT&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},IT&appid=${apiKey}&units=metric`;
const airQualityUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=45.6072&lon=9.3668&appid=${apiKey}`;

async function fetchWeatherData() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function fetchForecastData() {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

async function fetchAirQualityData() {
    try {
        const response = await fetch(airQualityUrl);
        const data = await response.json();
        displayAirQuality(data);
    } catch (error) {
        console.error('Error fetching air quality data:', error);
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Conditions: ${data.weather[0].description}</p>
    `;
}

function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '<h2>5-Day Forecast</h2>';
    data.list.forEach((item, index) => {
        if (index % 8 === 0) {
            forecastContainer.innerHTML += `
                <div>
                    <p>Date: ${new Date(item.dt * 1000).toLocaleDateString()}</p>
                    <p>High: ${item.main.temp_max} °C</p>
                    <p>Low: ${item.main.temp_min} °C</p>
                    <p>Conditions: ${item.weather[0].description}</p>
                </div>
            `;
        }
    });
}

function displayAirQuality(data) {
    const airQualityContainer = document.getElementById('air-quality');
    airQualityContainer.innerHTML = `
        <h2>Air Quality</h2>
        <p>AQI: ${data.list[0].main.aqi}</p>
        <p>Pollutants: ${JSON.stringify(data.list[0].components)}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();
    fetchForecastData();
    fetchAirQualityData();
});