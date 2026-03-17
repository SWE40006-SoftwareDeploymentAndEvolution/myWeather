function WeatherInfoCard ({label, value}) {
    return(
        <div className="info-card">
            <span className="info-label">{label}</span>
            <span className="info-value">{value}</span>
        </div>
    )
}

export default WeatherInfoCard