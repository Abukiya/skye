import { useState } from "react"
import { getWeather, getForecast } from "../services/weatherApi"

export default function useWeather() {

  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchWeather = async (city) => {

    try {
      setLoading(true)
      setError(null)

      const data = await getWeather(city)

      setWeather(data)
      localStorage.setItem("lastCity", city)

    } catch (err) {

      setError(err.message)

    } finally {

      setLoading(false)

    }

  }

  const searchForecast = async (city) => {
    try {
      setLoading(true)
      setError(null)

      const data = await getForecast(city)

      setForecast(data)
      localStorage.setItem("lastCity", city)

    } catch (err) {
      setError(err.message)

    } finally {
      setLoading(false)
    }
  }

  return { weather, forecast, loading, error, searchWeather, searchForecast }
}