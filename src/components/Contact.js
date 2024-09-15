// ContactForm.js
import React from 'react';

const Contact = () => {
  return (
    <form className="contact-form" style={{height:'450px'}}>
      <label htmlFor="nom">Nom</label>
      <input type="text" id="nom" name="nom" />

      <label htmlFor="prenom">Prénom</label>
      <input type="text" id="prenom" name="prenom" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message"></textarea>

      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default Contact;
