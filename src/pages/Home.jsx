import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import WeatherCard from "../components/WeatherCard"
import Loader from "../components/Loader"

import useWeather from "../hooks/useWeather"

function Home() {

  const { weather, loading, error, searchWeather } = useWeather()

  return (
    <div className="mx-auto max-w-6xl">
      <section className="overflow-hidden rounded-4xl border border-slate-200 bg-linear-to-br from-white to-slate-50 shadow-sm">
        <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-10">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-sm">
              Fast weather at a glance
            </span>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Track current conditions in a clean, fast weather view.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
              Search any city to see current temperature, wind, humidity, and a five-day forecast in one place.
            </p>

            <div className="mt-8 max-w-xl rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <SearchBar onSearch={searchWeather} />
              {error && <p className="mt-3 text-sm font-medium text-red-500">{error}</p>}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[1.75rem] border border-slate-200 bg-slate-900 p-6 text-white shadow-2xl shadow-slate-900/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">Today</p>
                  <p className="mt-1 text-2xl font-semibold">Forecast dashboard</p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/75">
                  Weather App
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">Search</p>
                  <p className="mt-2 text-lg font-semibold">Instant city lookup</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">Forecast</p>
                  <p className="mt-2 text-lg font-semibold">Five-day forecast</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">Details</p>
                  <p className="mt-2 text-lg font-semibold">Wind, humidity, pressure, and visibility</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">Status</p>
                  <p className="mt-2 text-lg font-semibold">Clean, responsive UI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {loading && <Loader />}

      {weather && <WeatherCard weather={weather} />}

      {weather && (
        <div className="mt-6 text-center">
          <Link
            to={`/forecast?city=${encodeURIComponent(weather.name)}`}
            className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800"
          >
            View five-day forecast
          </Link>
        </div>
      )}
    </div>
  )
}

export default Home