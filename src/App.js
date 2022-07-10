import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Services from "./routes/services/Services"
import Contact from "./routes/contact/Contact"

const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>
  )
}

export default App
