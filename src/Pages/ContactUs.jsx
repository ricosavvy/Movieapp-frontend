import React from 'react';
import './ContactUs.css';

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
        email: 'patricklungu99@gmail.com',
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
     const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="developers">
        {developers.map((developer, index) => (
          <div className="developer" key={index}>
            <img src={developer.image} id='dev_img' alt={developer.name} />
            <div className="reflection">
              <h2>{developer.name}</h2>
              <p>Email: {developer.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  };
export default ContactUs;