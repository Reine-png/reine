// src/components/Education.jsx
import React from 'react';

const Education = () => {
  return (
    <section className="education" id="education">
    <h2 className="section-title">Formations</h2>
    <div className="education-list">
      <div className="education-item">
        <h3>Licence en Informatique</h3>
        <span>Université de Yaoundé I | 2022 - Présent</span>
        <p>Spécialisation en développement mobile avancé, projets pratiques en Flutter, React Native et Android.</p>
      </div>
      <div className="education-item">
        <h3>Diplôme de Baccalauréat Scientifique D</h3>
        <span>Lycée de Bilingue d'Application 2016 - 2020</span>
        <p>Option Mathématiques et Sciences Physiques, mention Bien.</p>
        <span>Lycée de Bilingue de MBalmayo 2016 - 2020</span>
        <span>Obtention de mon Brevet de fin d'etude du premier cycle</span>
        <span>Sacre-coeur de MBockulu de MBalmayo 2015 </span>
        <span>Obtention de mon Certificat de fin d'etude primaire CEP</span>
      </div>
    </div>
  </section>
  );
};

export default Education;
