import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className={`app ${darkMode ? '' : 'light-mode'}`}>
      <div className="bg-shapes">
        <div className="diagonal diagonal-1"></div>
        <div className="diagonal diagonal-2"></div>
      </div>

      <Navbar onToggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App