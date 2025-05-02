import React from 'react';
import './Cvmedia.css';

const CvMedia = () => {
  return (
    <div className="cv-media">
      <div className="media-section">
        <h3>🎥 CV Vidéo</h3>
        <video controls className="media-player">
          <source src="/media/Présentation CV.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
        
      <div className="media-section">
        <h3>🎧 CV Audio</h3>
        <audio controls className="media-player">
          <source src="/media/presentation Audio.mp3" type="audio/mp3" />
          Votre navigateur ne supporte pas la lecture audio.
        </audio>
      </div>
    </div>
  );
};

export default CvMedia;
