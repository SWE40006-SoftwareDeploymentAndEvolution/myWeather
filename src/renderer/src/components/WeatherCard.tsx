function WeatherCard({cityWeather}) {
    return(
        <div className="main-weather-card">
              <div className="weather-location">
                {cityWeather.name}, {cityWeather.sys.country}
              </div>

              <div className="main-weather-bottom">
                <div className="weather-temp">
                  {Math.round(cityWeather.main.temp)}°C
                </div>
                <div className="weather-condition">
                  {cityWeather.weather[0].main}
                </div>
              </div>
            </div>
    )
}

export default WeatherCard