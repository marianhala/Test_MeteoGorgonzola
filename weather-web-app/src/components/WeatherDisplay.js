class WeatherDisplay {
    constructor(weatherData) {
        this.weatherData = weatherData;
    }

    render() {
        const { main, weather, name } = this.weatherData;
        const temperature = main.temp;
        const humidity = main.humidity;
        const weatherCondition = weather[0].description;

        return `
            <div class="weather-display">
                <h2>Current Weather in ${name}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Condition: ${weatherCondition}</p>
            </div>
        `;
    }
}

export default WeatherDisplay;