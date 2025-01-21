export const fetchCurrentWeather = async (city) => {
    const apiKey = '8867b17d9139fb6140dc0d31c117588c';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch current weather data');
    }
    return await response.json();
};

export const fetch5DayForecast = async (city) => {
    const apiKey = '8867b17d9139fb6140dc0d31c117588c';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch 5-day forecast data');
    }
    return await response.json();
};

export const fetchAirQuality = async (lat, lon) => {
    const apiKey = '8867b17d9139fb6140dc0d31c117588c';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    if (!response.ok) {
        throw new Error('Failed to fetch air quality data');
    }
    return await response.json();
};