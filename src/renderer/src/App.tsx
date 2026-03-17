import { useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import WeatherInfoCard from './components/WeatherInfoCard'
import SearchBar from './components/SearchBar'
import LogoComponent from './components/LogoComponent'

function App() {
	const [city, setCity] = useState('')
	const [cityWeather, setCityWeather] = useState<any>(null)
	const [loading, setLoading] = useState(false)
	const [errorMsg, setErrorMsg] = useState('')

	const API_KEY = import.meta.env.VITE_API_KEY

	const getCityDate = () => {
		if (!cityWeather) return ""

		const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000
		const cityTime = new Date(utc + cityWeather.timezone * 1000)

		return cityTime.toLocaleString(undefined, {
			year: "numeric",
			month: "long",
			day: "numeric"
		})
	}

	const getWeather = async () => {
		if (!city.trim()) {
			setErrorMsg('Please enter a city name.')
			setCityWeather(null)
			return
		}

		try {
			setLoading(true)
			setErrorMsg('')
			setCityWeather(null)

			const result = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
			)

			setCityWeather(result.data)

		} catch (err) {
			if (err instanceof Error) {
				
			} else {
				setErrorMsg('Something went wrong.')
			}
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="app">
			<div className="weather-card">
				<div className="top-bar">
					<LogoComponent />
					<SearchBar city={city} setCity={setCity} getWeather={getWeather} />
				</div>

				{loading && <p className="info">Loading city's weather data...</p>}
				{errorMsg && <p className="error">{errorMsg}</p>}

				{cityWeather && (
					<div>
						<div className="date-info">
							{getCityDate()}
						</div>

						<div className="weather-grid">
							<WeatherCard cityWeather={cityWeather} />
							<WeatherInfoCard label="Humidity" value={`${cityWeather.main.humidity}%`} />
							<WeatherInfoCard label="Pressure" value={`${cityWeather.main.pressure} hPa`} />
							<WeatherInfoCard label="Wind Speed" value={`${cityWeather.wind.speed} m/s`} />
							<WeatherInfoCard label="Visibility" value={`${(cityWeather.visibility / 1000).toFixed(1)} km`} />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default App