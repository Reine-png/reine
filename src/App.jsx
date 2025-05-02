// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Composants
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Cvmedia from './components/Cvmedia';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/skills">Compétences</Link></li>
              <li><Link to="/experience">Expériences</Link></li>
              <li><Link to="/education">Formations</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cv-media">Cvmedia</Link></li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<><Contact /><ContactForm /></>} />
            <Route path="/cv-media" element={<Cvmedia />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
