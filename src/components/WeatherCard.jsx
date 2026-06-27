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
    <div className="mx-auto mt-8 w-full max-w-2xl overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-linear-to-br from-slate-900 to-slate-800 px-6 py-6 text-white sm:px-8">
        <div className="mb-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          {weather.name}, {weather.sys.country}
        </h2>
        <p className="text-sm text-white/70 capitalize">{description}</p>
        </div>

        <div className="flex items-center justify-center gap-4 pb-2">
          {iconCode && (
            <img
              className="h-20 w-20"
              src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
              alt={description}
            />
          )}
          <div className="text-center">
            <p className="text-6xl font-semibold leading-none">{Math.round(weather.main.temp)}°C</p>
            <p className="text-sm text-white/70">Feels Like {Math.round(weather.main.feels_like)}°C</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 p-6 text-left text-sm sm:p-8">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Humidity</p>
          <p className="text-lg font-semibold text-slate-900">{weather.main.humidity}%</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Wind</p>
          <p className="text-lg font-semibold text-slate-900">{weather.wind.speed} m/s</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Pressure</p>
          <p className="text-lg font-semibold text-slate-900">{weather.main.pressure} hPa</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Visibility</p>
          <p className="text-lg font-semibold text-slate-900">{Math.round(weather.visibility / 1000)} km</p>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-6 py-5 text-left text-sm text-slate-600 sm:px-8">
        <div className="grid gap-2 sm:grid-cols-2">
          <p>High: {Math.round(weather.main.temp_max)}°C</p>
          <p>Low: {Math.round(weather.main.temp_min)}°C</p>
          <p>Cloudiness: {weather.clouds?.all ?? 0}%</p>
          <p>Sunrise: {formatClock(weather.sys.sunrise)}</p>
          <p>Sunset: {formatClock(weather.sys.sunset)}</p>
          <p>Last Updated: {formatClock(weather.dt)}</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard