import { BrowserRouter } from 'react-router-dom'
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
        <Skills />
        <Projects />
      </main>
    </BrowserRouter>
    </>
  )
}

export default App
