function WeatherCard({ cityWeather }) {
  return (
    <div className="main-weather-card">
      <div className="weather-location">
        {cityWeather.name}, {cityWeather.sys.country}
      </div>

      <div className="main-weather-bottom">
        <div className="weather-temp">
          {Math.round(cityWeather.main.temp)}°C
        </div>

        <div className="main-weather-additional-info">
          <div className="weather-condition">
            {cityWeather.weather[0].main}
          </div>

          <div className="weather-feel">
            H: {Math.round(cityWeather.main.temp_max)}°C | L: {Math.round(cityWeather.main.temp_min)}°C
          </div>

        </div>
      </div>
    </div>
  )
}

export default WeatherCard