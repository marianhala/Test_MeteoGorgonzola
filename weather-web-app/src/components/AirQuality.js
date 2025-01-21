class AirQuality {
    constructor(data) {
        this.data = data;
    }

    render() {
        const airQualityContainer = document.createElement('div');
        airQualityContainer.className = 'air-quality';

        const aqi = this.data.aqi;
        const pollutants = this.data.pollutants;

        airQualityContainer.innerHTML = `
            <h2>Air Quality Index (AQI)</h2>
            <p>AQI Level: ${aqi.level}</p>
            <p>Description: ${aqi.description}</p>
            <h3>Pollutants</h3>
            <ul>
                ${pollutants.map(pollutant => `
                    <li>${pollutant.name}: ${pollutant.value} ${pollutant.unit}</li>
                `).join('')}
            </ul>
        `;

        return airQualityContainer;
    }
}

export default AirQuality;