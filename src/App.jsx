import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Navbar2 from './components/shared/Navbar2'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

import Index from './pages/Index'
import About from './pages/About'
import Employees from './pages/Employees'
import Employers from './pages/Employers'
import Agency from './pages/Agency'
import Policy from './pages/Policy'
import UnderConstruction from './pages/UnderConstruction'

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <Navbar /> */}
      {/* <Navbar2 /> */}
      <div>
        <Routes>
          <Route path='/' element={<UnderConstruction />}></Route>
          {/* <Route path='/' element={<Index />}></Route>

          <Route path='/about-us' element={<About />} />
          <Route path='/for-employees' element={<Employees />} />
          <Route path='/for-employers' element={<Employers />} />
          <Route path='/for-agency' element={<Agency />} />
          <Route path='/privacy-policy' element={<Policy />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
