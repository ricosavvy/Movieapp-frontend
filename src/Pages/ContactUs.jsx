import React from 'react';
import './ContactUs.css'

function ContactUs() {
    return (
      <div className="contact-us">
        <h1>Contact Us</h1>
        
        <div className=" developers">
          <h2>Developers:</h2>
          <div className=" frontend developer">
            <img src="img13.jpeg" alt=" frontend Developer 1 " />
            <h3> frontend Developer </h3>
            <p> frontend developer1@Movie App.Js.com</p>
          </div>
          <div className=" frontend developer">
            <img src="img11.jpeg" alt=" frontend Developer 2 " /> 
            <h4> frontend Developer 2</h4>
            <p> frontend developer2@Movie App.Js.com</p>
          </div>
          <div className=" frontend developer">
            <img src="img14.jpeg " alt=" frontend Developer 3" />
            <h5> frontend Developer 3</h5>
            <p> frontend developer3@Movie App.Js.com</p>
          </div>  
          <div className=" backend developer">
            <img src="img12.jpeg" alt=" backend Developer 4" />
            <h6> backend Developer 4</h6>
            <p> backend developer4@Movie App.Js.com</p>
          </div>
          <div className=" backend developer">
            <img src="img9.jpeg" alt=" backend Developer 5" />
            <h7> backend Developer 5</h7>
            <p> backend developer5@Movie App.Js.com</p>  
          </div>
          <div className=" backend developer">
            <img src="img10.jpeg" alt=" backend Developer 6" />
            <h8> backend Developer 6</h8>
            <p> backend developer6@Movie App.Js.com</p>
          </div>
          <div class="mirror-container">
             <div class="mirror-content">
                         <h2>Contact Us</h2>
                         <p>Feel free to reach out to us for any queries or feedback.</p>
                     <form>
                       <button type="submit">Send Message</button>
                     </form>
            </div>
        </div>
        </div>
      </div>  
    );
   }
  
  export default ContactUs;
  

 