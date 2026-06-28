import { useState } from "react"
import { getWeather, getForecast } from "../services/weatherApi"

export default function useWeather() {

  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchWeather = async (city) => {

    try {
      setLoading(true);
      setError(null);

      const data = await getWeather(city);

      setWeather(data);
      setForecast(null); // Clear forecast when searching for current weather
      localStorage.setItem("lastCity", city);

    } catch (err) {
      if (err.message === "City not found") {
        setError("Oops! We couldn't find that city. Please try again.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }

  };

  const searchForecast = async (city) => {
    try {
      setLoading(true);
      setError(null);

      const data = await getForecast(city);

      setForecast(data);
      setWeather(null); // Clear current weather when searching for forecast
      localStorage.setItem("lastCity", city);

    } catch (err) {
      if (err.message === "City not found") {
        setError("Oops! We couldn't find that city for the forecast. Please try again.");
      } else {
        setError("Something went wrong while fetching the forecast. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, searchWeather, searchForecast }
}