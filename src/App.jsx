import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importation de tous les composants
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
          <ContactForm />
        </section>
      </main>
    </div>
    </>
  )
}

export default App
