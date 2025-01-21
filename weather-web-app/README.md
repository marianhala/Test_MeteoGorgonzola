# Weather Web App

This project is a web application that displays weather data for Gorgonzola, Milan,or your location,including current weather conditions, a 5-day forecast, and air quality information. The application fetches data from the OpenWeatherMap API and presents it in a visually appealing layout.

## Project Structure

```
weather-web-app
├── public
│   ├── index.html        # Main HTML document
│   ├── styles.css        # Styles for the application
│   └── scripts
│       └── app.js        # Main JavaScript file
├── src
│   ├── components
│   │   ├── WeatherDisplay.js  # Component for displaying current weather
│   │   ├── Forecast.js        # Component for displaying 5-day forecast
│   │   └── AirQuality.js      # Component for displaying air quality information
│   ├── services
│   │   └── weatherService.js  # Service for fetching weather data
│   └── utils
│       └── api.js            # Utility functions for API calls
├── package.json               # npm configuration file
├── .babelrc                   # Babel configuration
├── .eslintrc.json             # ESLint configuration
└── README.md                  # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd weather-web-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Usage

Once the application is running, you will see the current weather data for Gorgonzola,or your location, including temperature, humidity, and weather conditions. Below the current weather, a 5-day forecast will be displayed, showing daily temperature highs and lows, along with weather conditions. Additionally, air quality information, including AQI levels and pollutants, will be presented.

## API Information

The application uses the OpenWeatherMap API to fetch weather data. Make sure to sign up for an API key and replace it in the `weatherService.js` file if necessary.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
