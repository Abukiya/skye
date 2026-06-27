import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-slate-900">
          <img src="/favicon.svg" alt="Weather App logo" className="h-10 w-10 rounded-xl bg-slate-900/5 p-1.5 shadow-sm" />
          <span>
            <span className="block text-lg font-semibold tracking-wide">Weather App</span>
            <span className="block text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
              Live weather and forecasts
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 transition-all ${isActive ? "bg-slate-900 text-white shadow-sm" : "hover:bg-slate-100 hover:text-slate-900"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/forecast"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 transition-all ${isActive ? "bg-slate-900 text-white shadow-sm" : "hover:bg-slate-100 hover:text-slate-900"}`
            }
          >
            Forecast
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 transition-all ${isActive ? "bg-slate-900 text-white shadow-sm" : "hover:bg-slate-100 hover:text-slate-900"}`
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar