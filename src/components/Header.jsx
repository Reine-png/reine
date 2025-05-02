import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo1">CV</h1>

        <div className="burger-menu" onClick={toggleMenu}>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/about" onClick={closeMenu}>À propos</Link></li>
          <li><Link to="/skills" onClick={closeMenu}>Compétences</Link></li>
          <li><Link to="/experience" onClick={closeMenu}>Expériences</Link></li>
          <li><Link to="/education" onClick={closeMenu}>Formations</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/cv-media" onClick={closeMenu}>Cvmedia</Link></li>
          <li><Link to="/cv" onClick={closeMenu}>CV</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
