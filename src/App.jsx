import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ScrollToTop from './components/oldx/ScrollToTop'

import Navbar from './components/shared/Navbar'
import NavbarResp from './components/shared/NavbarResp'
import Footer from './components/shared/Footer'

import Index from './pages/Index'
import Employees from './pages/Employees'
import Employers from './pages/Employers'
import Agency from './pages/Agency'
import Policy from './pages/Policy'

function App() {
  return (
    <div className='bg-colorBg'>
      <Router>
        <ScrollToTop />
        <div>
          <div className='hidden xl:flex'>
            <Navbar />
          </div>
          <div className='flex xl:hidden'>
            <NavbarResp />
          </div>
        </div>
        <div className='container  mx-auto '>
          <Routes>
            <Route path='/' element={<Index />}></Route>
            <Route path='/for-employees' element={<Employees />} />
            <Route path='/for-employers' element={<Employers />} />
            <Route path='/for-agency' element={<Agency />} />
            <Route path='/privacy-policy' element={<Policy />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
