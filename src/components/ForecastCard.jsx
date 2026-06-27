function ForecastCard({ day }) {
  const { date, temp_min, temp_max, description, icon, humidity, wind } = day

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm transition-transform hover:-translate-y-1">
      <p className="text-sm font-medium text-slate-500">{date}</p>
      <div className="mt-3 flex items-center gap-3">
        {icon && (
          <img
            className="h-16 w-16"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
          />
        )}
        <div>
          <p className="text-lg font-semibold">{Math.round((temp_min + temp_max) / 2)}°C</p>
          <p className="text-xs capitalize text-slate-500">{description}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600">
        <p>High: {Math.round(temp_max)}°C</p>
        <p>Low: {Math.round(temp_min)}°C</p>
        <p>Humidity: {Math.round(humidity)}%</p>
        <p>Wind: {wind.toFixed(1)} m/s</p>
      </div>
    </article>
  )
}

export default ForecastCard
