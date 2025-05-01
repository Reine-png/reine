import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact-text">
        Je suis ouverte à toute opportunité de collaboration ou de projet. 
        N'hésitez pas à me contacter via les moyens ci-dessous !
      </p>

      <div className="contact-info">
        <p><strong>Email :</strong> obangmanguellereineelisabeth@gmail.com</p>
        <p><strong>Téléphone :</strong> +237 6 96 28 01 71 </p>
        <p><strong>WhatsApp :</strong> <a href="https://wa.me/237696280171" target="_blank" rel="noopener noreferrer">Mon profil whatsApp</a></p>
        <p><strong>Facebook :</strong> <a href="https://www.facebook.com/torres.laqueen.5" target="_blank" rel="noopener noreferrer">Mon profil Facebook</a></p>
        <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/obang-manguelle-reine-%C3%A9lisabeth-7877762b2" target="_blank" rel="noopener noreferrer">Mon profil LinkedIn</a></p>
        <p><strong>Tiktok :</strong> <a href="https://www.tiktok.com/@reinel2376" target="_blank" rel="noopener noreferrer">Mon profil Tiktok</a></p>
        
      </div>
    </section>
  );
};

export default Contact;
