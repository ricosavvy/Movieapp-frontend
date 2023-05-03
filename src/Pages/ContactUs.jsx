import React from 'react';
import './ContactUs.css'

function ContactUs() {
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
            <img src="developer-1.jpg" alt="Developer 1" />
            <h3>Developer 1</h3>
            <p>developer1@movieapp.com</p>
          </div>
          <div className="developer">
            <img src="developer-2.jpg" alt="Developer 2" />
            <h4>Developer 2</h4>
            <p>developer2@movieapp.com</p>
          </div>
          <div className="developer">
            <img src="developer-2.jpg" alt="Developer 3" />
            <h5>Developer 3</h5>
            <p>developer2@movieapp.com</p>
          </div>
          <div className="developer">
            <img src="developer-2.jpg" alt="Developer 4" />
            <h6>Developer 4</h6>
            <p>developer2@movieapp.com</p>
          </div>
          <div className="developer">
            <img src="developer-2.jpg" alt="Developer 5" />
            <h7>Developer 4</h7>
            <p>developer2@movieapp.com</p>
          </div>
          <div className="developer">
            <img src="developer-2.jpg" alt="Developer 6" />
            <h8>Developer 4</h8>
            <p>developer2@movieapp.com</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactUs;
  

 