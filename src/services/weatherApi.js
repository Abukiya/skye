const API_KEY = "b918c4026f03aa1eb0385ed49079b477"

export async function getWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  )

  if (!res.ok) {
    throw new Error("City not found")
  }

  return res.json()
}

export async function getForecast(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  )

  if (!res.ok) {
    throw new Error("City not found")
  }

  return res.json()
}