import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import WeatherCard from "../components/WeatherCard"
import Loader from "../components/Loader"

import useWeather from "../hooks/useWeather"

function Home() {

  const { weather, loading, error, searchWeather } = useWeather()

  return (
    <div className="max-w-xl mx-auto">

      <SearchBar onSearch={searchWeather} />

      {loading && <Loader />}

      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}

      {weather && <WeatherCard weather={weather} />}

      {weather && (
        <div className="mt-5 text-center">
          <Link
            to={`/forecast?city=${encodeURIComponent(weather.name)}`}
            className="inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            View 5-Day Forecast
          </Link>
        </div>
      )}

    </div>
  )
}

export default Home