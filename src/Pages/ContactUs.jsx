import React from 'react';
import './ContactUsPage.css';

const developers = [
  function ContactUs() {
    const developers = [
      {
        id: 1,
        name: 'CLEMENTINA NIYINAGIRA',
        email: 'clementinaniyinagira03@gmail.com',
        image: 'img13.jpeg',
      },
      {
        id: 2,
        name: 'PATRICK LUNGU',
        email: 'devlop2@movieapp.com',
        image: 'img11.jpeg',
      },
      {
        id: 3,
        name: 'IVWANAJI SIMBULE',
        email: 'developer3@movieapp.com',
        image: 'img10.jpeg',
      },
      {
        id: 4,
        name: 'WAZA BANDA',
        email: '1wazabanda@gmail.com',
        image: 'img12.jpeg',
      },
      {
        id: 5,
        name: 'TWAMBO',
        email: 'Tlcheeba04@gmail.com',
        image: 'img9.jpeg',
      },
      {
        id: 6,
        name: 'TOM CHILESHI',
        email: 'tomchileshe191@gmail.com',
        image: 'img14.jpeg',
      },
    ];
   const ContactUsPage = () => {
      return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <div className="developer-list">
        {developers.map((developer, index) => (
          <div key={index} className="developer-card">
            <img src={developer.image} alt={developer.name} />
            <div className="developer-details">
              <h2>{developer.name}</h2>
              <p>Email: {developer.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUsPage;