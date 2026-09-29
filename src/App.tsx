import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AtlasCopco from './pages/AtlasCopco'
import Gases from './pages/Gases'
import GasEquipment from './pages/GasEquipment'
import Maintenance from './pages/Maintenance'
import Industries from './pages/Industries'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atlas-copco" element={<AtlasCopco />} />
            <Route path="/gases" element={<Gases />} />
            <Route path="/gas-equipment" element={<GasEquipment />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

