function WeatherCard({ weather }) {
  return (
    <div className="bg-white shadow-md rounded p-6 mt-6">

      <h2 className="text-xl font-bold">
        {weather.name}
      </h2>

      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>

    </div>
  )
}

export default WeatherCard