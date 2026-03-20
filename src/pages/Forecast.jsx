import SearchBar from "../components/SearchBar"
import ForecastCard from "../components/ForecastCard"
import Loader from "../components/Loader"
import useWeather from "../hooks/useWeather"

function Forecast() {
  const { forecast, loading, error, searchForecast } = useWeather()

  const dailyForecast = () => {
    if (!forecast?.list) return []

    const days = {}

    forecast.list.forEach((entry) => {
      const entryDate = new Date(entry.dt * 1000)
      const key = entryDate.toLocaleDateString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })

      if (!days[key]) {
        days[key] = {
          date: entryDate.toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
          }),
          temp_min: entry.main.temp_min,
          temp_max: entry.main.temp_max,
          humidity: entry.main.humidity,
          wind: entry.wind.speed,
          description: entry.weather?.[0]?.description || "",
          icon: entry.weather?.[0]?.icon || "",
          count: 1,
        }
      } else {
        days[key].temp_min = Math.min(days[key].temp_min, entry.main.temp_min)
        days[key].temp_max = Math.max(days[key].temp_max, entry.main.temp_max)
        days[key].humidity += entry.main.humidity
        days[key].wind += entry.wind.speed
        days[key].count += 1
        // keep icon/description as first of the day
      }
    })

    return Object.values(days)
      .slice(0, 5)
      .map((day) => ({
        ...day,
        humidity: day.humidity / day.count,
        wind: day.wind / day.count,
      }))
  }

  const fiveDay = dailyForecast()

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">5 Day Forecast</h1>
      <p className="mt-2 mb-6 text-gray-700">
        Search for a city to load the real 5-day forecast grouped by date.
      </p>

      <SearchBar onSearch={searchForecast} />

      {loading && <Loader />}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {forecast?.city && (
        <div className="mt-4 text-lg text-gray-800">
          Forecast for {forecast.city.name}, {forecast.city.country}
        </div>
      )}

      {fiveDay.length > 0 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {fiveDay.map((day) => (
            <ForecastCard key={day.date} day={day} />
          ))}
        </div>
      )}

      {!loading && !error && !forecast && (
        <p className="mt-4 text-gray-600">Start by searching a city above.</p>
      )}
    </div>
  )
}

export default Forecast