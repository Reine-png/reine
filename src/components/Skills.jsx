import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Compétences</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Développement Web</h3>
          <p>HTML, CSS, JavaScript, React.js, Next.js</p>
        </div>
        <div className="skill-card">
          <h3>Développement Mobile</h3>
          <p>Flutter, React Native</p>
        </div>
        <div className="skill-card">
          <h3>Base de Données</h3>
          <p>MySQL, Firebase, MongoDB</p>
        </div>
        <div className="skill-card">
          <h3>Outils & Méthodes</h3>
          <p>Git, Figma, Scrum, Trello</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
