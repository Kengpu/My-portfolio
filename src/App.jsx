import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Homepage.jsx';
import Project from './pages/Projectpage.jsx';
import About from './pages/Aboutpage.jsx';
import Contact from './pages/Contactpage.jsx';
import './App.css'

function App() {
  return(
    <BrowserRouter>
     <Navbar />
     
     <Routes>
        <Route path = "/" element= {<Home />}/>
        <Route path = "/projects" element ={<Project />} />
        <Route path = "/about"  element ={<About />}/>
        <Route path = "/contact"  element ={<Contact />} />
     </Routes>

    <Footer />
    </BrowserRouter>
  );
}

export default App