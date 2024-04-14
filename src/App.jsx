import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import './styles/App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
    </BrowserRouter>
    </>
  )
}

export default App
