import React from 'react';
import './ContactUs.css';
import img13 from '../assets/img/img13.jpeg' 
import img14 from '../assets/img/img14.jpeg'
import img10 from '../assets/img/img10.jpeg'
import img11 from '../assets/img/img11.jpeg'
import img12 from '../assets/img/img12.jpeg'
import img9 from '../assets/img/img9.jpeg'

const developers = [
      {
        id: 1,
        name: 'CLEMENTINA NIYINAGIRA',
        email: 'clementinaniyinagira03@gmail.com',
        image: `${img13}`,
      },
      {
        id: 2,
        name: 'PATRICK LUNGU',
        email: 'patricklungu99@gmail.com',
        image: `${img11}`,
      },
      {
        id: 3,
        name: 'IVWANAJI SIMBULE',
        email: 'developer3@movieapp.com',
        image: `${img10}`,
      },
      {
        id: 4,
        name: 'WAZA BANDA',
        email: '1wazabanda@gmail.com',
        image: `${img12}`,
      },
      {
        id: 5,
        name: 'TWAMBO',
        email: 'Tlcheeba04@gmail.com',
        image: `${img9}`,
      },
      {
        id: 6,
        name: 'TOM CHILESHI',
        email: 'tomchileshe191@gmail.com',
        image: `${img14}`,
      },
      // Add more developers here...
    ];    
const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="developers">
        {developers.map((developer, index) => (
          <div className="developer" key={index}>
            <img src={developer.image} alt={developer.name} />
            <div className="info">
              <h3>{developer.name}</h3>
              <p>{developer.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;