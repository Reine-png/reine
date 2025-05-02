// src/components/Cv.jsx
import React from 'react';

const Cv = () => {
  return (
    <div className="cv-section">
      <h2>Mon CV</h2>
      <p>Vous pouvez consulter ou télécharger mon CV en cliquant ci-dessous :</p>
      <a 
        href="/Cv.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="cv-button"
      >
        Voir le CV
      </a>
    </div>
  );
};

export default Cv;
