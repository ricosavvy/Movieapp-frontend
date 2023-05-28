import React from 'react';
import './ContactUs.css';
import img13 from '../assets/img/img13.jpeg' 
import img14 from '../assets/img/img14.jpeg'
import img10 from '../assets/img/img10.jpeg'
import img11 from '../assets/img/img11.jpeg'
import img12 from '../assets/img/img12.jpeg'
import img9 from '../assets/img/img9.jpeg'
import  { useState } from "react";

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
    ]
    const ContactUs = () => {
    
       return (
      <div className="contact-us">
        {developers.map((developer, index) => (
          <div className="contact-card" key={index}>
            <div className="image-container">
              <img src={developer.image} alt={developer.name} />
            </div>
            <div className="info">
              <h3>{developer.name}</h3>
              <p>Email: {developer.email}</p>
            </div>
          </div>
        ))}
        <Contactus />
      </div>
      );
   };
   function Contactus() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Message: ", message);
      // Add code to send the message to your server or email service
    };
  
    return (
      <div className="contact-container">
        <h1 className="contact-heading">Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label className="contact-label">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contact-input"
            />
          </label>
          <label className="contact-label">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contact-input"
            />
          </label>
          <label className="contact-label">
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact-input contact-textarea"
            />
          </label>
          <button type="submit" className="contact-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
  export default ContactUs;
  
      