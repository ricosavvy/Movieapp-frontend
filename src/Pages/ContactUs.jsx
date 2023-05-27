import React from 'react';
import './ContactUs.css';
import img13 from '../assets/img/img13.jpeg' 
import img14 from '../assets/img/img14.jpeg'
import img10 from '../assets/img/img10.jpeg'
import img11 from '../assets/img/img11.jpeg'
import img12 from '../assets/img/img12.jpeg'
import img9 from '../assets/img/img9.jpeg'
import ImageCompressor from 'react-image-compressor';
 
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
    ];
     const ContactUs = () => {
      const [compressedImage, setCompressedImage] = useState(null);

      const handleImageChange = async (event) => {
        const imageFile = event.target.files[0];
        
        try {
          const compressedFile = await ImageCompressor(imageFile, {
            quality: 0.6, // Set the desired quality (0.1 to 1.0)
            maxWidth: 800, // Set the maximum width of the compressed image
            maxHeight: 600, // Set the maximum height of the compressed image
          });
    
          setCompressedImage(compressedFile);
        } catch (error) {
          console.error('Image compression failed:', error);
        }
      };
    
      
        <div>
          <h1>Contact Us Page</h1>
          <input type="file" accept="image/*" onChange={handleImageChange} />
    
          {compressedImage && (
            <div>
              <h2>Compressed Image</h2>
              <img src={URL.createObjectURL(compressedImage)} alt="Compressed" />
            </div>
          )}
           </div>
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
      )
  };
export default ContactUs;