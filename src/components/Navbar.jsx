import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/forecast">Forecast</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar