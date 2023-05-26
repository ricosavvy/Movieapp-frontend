import React from 'react';
import './ContactUs.css';


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
  const [currentDeveloper, setCurrentDeveloper] = useState(0);

  const handleNextDeveloper = () => {
    setCurrentDeveloper((prevDeveloper) => (prevDeveloper + 1) % developers.length);
  };

  const handlePreviousDeveloper = () => {
    setCurrentDeveloper((prevDeveloper) =>
      prevDeveloper === 0 ? developers.length - 1 : prevDeveloper - 1
    );
  };
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label>
        <input type="text" />

        <label>Email:</label>
        <input type="email" />

        <label>Message:</label>
        <textarea></textarea>

        <button type="submit">Send</button>
      </form>

      
      <div className="developers">
        <h2>Developers:</h2>
        <div className="developer">
          <img src={developers[currentDeveloper].image} alt={developers[currentDeveloper].name} />
          <h3>{developers[currentDeveloper].name}</h3>
          <p>{developers[currentDeveloper].email}</p>
        </div>
        <div className="slider-buttons">
          <button onClick={handlePreviousDeveloper}>&lt;</button>
          <button onClick={handleNextDeveloper}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
  

 