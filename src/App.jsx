import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const headingRef = useRef(null)

  useEffect(() => {
    // Split text into individual letters manually
    const heading = headingRef.current
    const text = heading.textContent
    heading.innerHTML = text
      .split('')
      .map((char) => `<span class="letter">${char}</span>`)
      .join('')

    // Animate each letter
    gsap.from('.letter', {
      duration: 0.8,
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: 'back.out(1.7)',
    })
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 ref={headingRef}>Vite + React + GSAP SplitText</h1>
    </div>
  )
}

export default App