// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <section className="experience" id="experience">
    <h2 className="section-title">Expériences professionnelles</h2>
    <div className="timeline">
      <div className="timeline-item">
        <h3>Devoops</h3>
        <span>2024 - Présent</span>
        <p> suivi d'une formation en developpement d'application web,heberger sur des serveurs distants et locales.</p>
      </div>
      <div className="timeline-item">
        <h3>Développeuse Mobile - App Solutions</h3>
        <span>2025-present</span>
        <p>Création d'applications mobiles cross-plateformes avec Flutter et React Native dans le cadre de la formation en ICT4D.</p>
      </div>
      <div className="timeline-item">
        <h3>Stage Développement - D'Application web</h3>
        <span>2021 - 2022</span>
        <p>Participation à des projets web, maintenance de sites, initiation aux méthodes agiles et UX/UI design à l'incubateur.</p>
      </div>
    </div>
  </section>
  );
};

export default Experience;
