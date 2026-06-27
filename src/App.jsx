import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Forecast from "./pages/Forecast"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900">
        <Navbar />

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="mt-auto border-t border-slate-200 bg-white/80 px-6 py-4 text-center text-sm text-slate-600 backdrop-blur">
          <p>&copy; 2026 Weather App. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App