import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetching = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&appid=0589b7513a62d13f92e88d5e4d229661`
      );
      setWeatherData(res.data);
    } catch (error) {
      console.error("Error Fetching data", error);
    }
  };
  fetching();

  return (
    <div className="container">
      <h1>Current Weather and 5-Day Forecast</h1>
      <div id="current-weather" className="weather-section">
        <h2>Current Weather</h2>
        <div className="weather-details" id="current-weather-details">
          {/* <!-- Current weather details will be inserted here --> */}
          <p>{weatherData}</p>
        </div>
      </div>
      <div id="forecast" className="weather-section">
        <h2>5-Day Forecast</h2>
        <div className="forecast-details" id="forecast-details">
          {/* <!-- Forecast details will be inserted here --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
