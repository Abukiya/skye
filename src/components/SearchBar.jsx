import { useState } from "react"

function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!city.trim()) return
    onSearch(city)
    setCity("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        className="rounded-full bg-slate-900 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-slate-800"
        type="submit"
        disabled={loading} // Disable button when loading
      >
        {loading ? "Searching..." : "Search"} {/* Change button text based on loading state */}
      </button>
    </form>
  )
}

export default SearchBar