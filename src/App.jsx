import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/homepage.jsx';
import Project from './pages/projectpage.jsx';
import About from './pages/aboutpage.jsx';
import Contact from './pages/contactpage.jsx';
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