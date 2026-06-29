import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import ForecastCard from "../components/ForecastCard"
import Loader from "../components/Loader"
import useWeather from "../hooks/useWeather"

function Forecast() {
  const { forecast, loading, error, searchForecast } = useWeather()
  const [searchParams] = useSearchParams()
  const cityFromQuery = searchParams.get("city")

  useEffect(() => {
    const cityToSearch = cityFromQuery || localStorage.getItem("lastCity")

    if (cityToSearch) {
      searchForecast(cityToSearch)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityFromQuery])

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
    <div className="mx-auto max-w-6xl">
      <section className="rounded-4xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-linear-to-br from-slate-900 to-slate-800 px-6 py-8 text-white sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">Five-day forecast</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Forecast overview</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
            Review the next five days of temperature, humidity, wind, and conditions in a clear summary view.
          </p>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-8">
          {forecast?.city && (
            <div className="mb-6 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Current city</p>
              <p className="mt-2 text-lg font-medium text-slate-900">
                Forecast for {forecast.city.name}, {forecast.city.country}
              </p>
            </div>
          )}

          {error && <p className="mt-4 text-sm font-medium text-red-500">{error}</p>}

          {!loading && !error && !forecast?.list && (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center text-slate-600">
              <p className="text-lg font-medium text-slate-900">No forecast loaded yet</p>
              <p className="mt-2 text-sm">Search a city from the home page to see the five-day forecast here.</p>
            </div>
          )}

          {loading && <Loader />}

          {error && <p className="mt-4 text-sm font-medium text-red-500">{error}</p>}

          {fiveDay.length > 0 && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {fiveDay.map((day) => (
                <ForecastCard key={day.date} day={day} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Forecast