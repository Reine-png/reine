// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo1">Reine CV</h1>
        <ul className="nav-links">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#experience">Expériences</a></li>
          <li><a href="#education">Formations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
