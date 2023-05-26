import React from 'react';
import './ContactUs.css';
import Slider from 'react-slick';

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        <Slider {...settings}>
          {developers.map((developer) => (
            <div className="developer" key={developer.id}>
              <img src={AuthenticatorAssertionResponse.img} alt={developer.name} />
              <h3>{developer.name}</h3>
              <p>{developer.email}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ContactUs;
  

 