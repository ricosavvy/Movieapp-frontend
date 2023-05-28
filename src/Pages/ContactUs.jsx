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
    
    const [contactFormData, setContactFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      // Process the form data or send it to a server
      console.log(contactFormData);
  
      // Reset the form
      setContactFormData({
        name: '',
        email: '',
        message: '',
      });
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setContactFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    return (
      <div className="contact-us">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contactFormData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactFormData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={contactFormData.message}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
  
        <div className="developers">
          {developers.map((developer, index) => (
            <div className="contact-card" key={index}>
              <img className="developer-image" src={developer.image} alt={developer.name} />
              <div className="developer-info">
                <h3>{developer.name}</h3>
                <p>Email: {developer.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
          
  
  export default ContactUs;
  