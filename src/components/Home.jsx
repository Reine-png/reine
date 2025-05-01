// src/components/Home.jsx
import React from 'react'
import './Home.css'; // (on peut aussi créer un CSS spécifique)

const Home = () => {
  return (
    <section className="home">
      <img src="image.jpg" alt="Reine Elisabeth" className="profile-pic" />
      <h1>Reine Elisabeth ||</h1>
      <h2>Développeur junior Web & Mobile</h2>
    </section>
  );
};

export default Home;

