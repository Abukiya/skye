function ForecastCard({ day }) {
  const { date, temp_min, temp_max, description, icon, humidity, wind } = day

  return (
    <article className="rounded-2xl border border-white/25 bg-white/10 p-4 text-white shadow-lg backdrop-blur-lg hover:scale-[1.02] transition-transform">
      <p className="text-sm text-white/70">{date}</p>
      <div className="flex items-center gap-3 mt-2">
        {icon && (
          <img
            className="h-16 w-16"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
          />
        )}
        <div>
          <p className="font-bold text-lg">{Math.round((temp_min + temp_max) / 2)}°C</p>
          <p className="text-xs text-white/70 capitalize">{description}</p>
        </div>
      </div>
      <div className="mt-3 text-xs grid grid-cols-2 gap-2">
        <p className="text-white/80">High: {Math.round(temp_max)}°C</p>
        <p className="text-white/80">Low: {Math.round(temp_min)}°C</p>
        <p className="text-white/80">Humidity: {Math.round(humidity)}%</p>
        <p className="text-white/80">Wind: {wind.toFixed(1)} m/s</p>
      </div>
    </article>
  )
}

export default ForecastCard
