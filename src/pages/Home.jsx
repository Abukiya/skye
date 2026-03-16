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

    </div>
  )
}

export default Home