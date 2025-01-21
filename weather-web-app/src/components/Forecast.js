class Forecast {
    constructor(data) {
        this.data = data;
    }

    render() {
        const forecastContainer = document.createElement('div');
        forecastContainer.className = 'forecast-container';

        this.data.list.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'forecast-day';

            const date = new Date(day.dt * 1000).toLocaleDateString();
            const tempHigh = day.temp.max;
            const tempLow = day.temp.min;
            const weatherCondition = day.weather[0].description;

            dayElement.innerHTML = `
                <h3>${date}</h3>
                <p>High: ${tempHigh}°C</p>
                <p>Low: ${tempLow}°C</p>
                <p>Condition: ${weatherCondition}</p>
            `;

            forecastContainer.appendChild(dayElement);
        });

        return forecastContainer;
    }
}

export default Forecast;