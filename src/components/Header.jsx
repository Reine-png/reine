import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Reine CV</h1>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/skills">Compétences</Link></li>
          <li><Link to="/experience">Expériences</Link></li>
          <li><Link to="/education">Formations</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Cvmedia">CV Vidéo & Audio</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
