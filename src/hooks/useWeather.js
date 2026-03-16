import { useState } from "react"
import { getWeather } from "../services/weatherApi"

export default function useWeather() {

  const [weather, setWeather] = useState(null)
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

  return { weather, loading, error, searchWeather }
}