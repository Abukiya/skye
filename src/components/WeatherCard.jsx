function WeatherCard({ weather }) {
  const iconCode = weather.weather?.[0]?.icon
  const description = weather.weather?.[0]?.description
  const formatClock = (unix) =>
    new Date(unix * 1000).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })

  return (
    <div className="mx-auto mt-6 w-full max-w-lg rounded-3xl border border-white/25 bg-white/10 p-6 shadow-2xl backdrop-blur-xl text-white">
      <div className="mb-4 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">
          {weather.name}, {weather.sys.country}
        </h2>
        <p className="text-sm text-white/70 capitalize">{description}</p>
      </div>

      <div className="flex items-center justify-center gap-4 pb-4">
        {iconCode && (
          <img
            className="h-20 w-20"
            src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
            alt={description}
          />
        )}
        <div className="text-center">
          <p className="text-6xl font-black leading-none">{Math.round(weather.main.temp)}°C</p>
          <p className="text-sm text-white/70">Feels Like {Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 rounded-2xl bg-black/30 p-3 text-left text-sm">
        <div className="rounded-xl bg-white/10 p-3">
          <p className="text-xs uppercase text-white/70">Humidity</p>
          <p className="text-lg font-semibold">{weather.main.humidity}%</p>
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <p className="text-xs uppercase text-white/70">Wind</p>
          <p className="text-lg font-semibold">{weather.wind.speed} m/s</p>
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <p className="text-xs uppercase text-white/70">Pressure</p>
          <p className="text-lg font-semibold">{weather.main.pressure} hPa</p>
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <p className="text-xs uppercase text-white/70">Visibility</p>
          <p className="text-lg font-semibold">{Math.round(weather.visibility / 1000)} km</p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-black/30 p-3 text-left text-sm">
        <p>High: {Math.round(weather.main.temp_max)}°C</p>
        <p>Low: {Math.round(weather.main.temp_min)}°C</p>
        <p>Cloudiness: {weather.clouds?.all ?? 0}%</p>
        <p>Sunrise: {formatClock(weather.sys.sunrise)}</p>
        <p>Sunset: {formatClock(weather.sys.sunset)}</p>
        <p>Last Updated: {formatClock(weather.dt)}</p>
      </div>
    </div>
  )
}

export default WeatherCard