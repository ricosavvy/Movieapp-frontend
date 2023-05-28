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
      </div>
      );
   };
   function ContactUs() {
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
      <div>
        <h1 style={{ textAlign: "center" }}>Contact Us</h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", width: "300px", margin: "0 auto" }}
        >
          <label style={{ marginBottom: "10px" }}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginTop: "5px" }}
            />
          </label>
          <label style={{ marginBottom: "10px" }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginTop: "5px" }}
            />
          </label>
          <label style={{ marginBottom: "10px" }}>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ marginTop: "5px" }}
            />
          </label>
          <button type="submit" style={{ alignSelf: "center" }}>
            Submit
          </button>
        </form>
        </div>
  );
}
  export default ContactUs;
  
      