import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Index from "./pages/Index";
import About from "./pages/About";
import Employees from "./pages/Employees";
import Employers from "./pages/Employers";
import Agency from "./pages/Agency";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <div className="container flex mx-auto"> */}
      <div>
        <Routes>
          <Route path="/" element={<Index />}></Route>

          <Route path="/about-us" element={<About />} />
          <Route path="/for-employees" element={<Employees />} />
          <Route path="/for-employers" element={<Employers />} />
          <Route path="/for-agency" element={<Agency />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
