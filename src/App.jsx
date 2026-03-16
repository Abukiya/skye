import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Forecast from "./pages/Forecast"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">

        <Navbar />

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App