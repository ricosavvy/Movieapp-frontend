import { React } from "react";
import { Container, Typography, Stack } from '@mui/material';
import { Link } from "react-router-dom";
import {Button} from '@mui/material';
import Footer from '../Components/Footer'
import './pages.css'

const Home = () => {

  return (
    <>
      <div className='Hero_Section'>
        <Container maxWidth='sm'>
          <Typography 
            variant='h2'    
            color='white'    
            fontFamily='monospace' 
            gutterBottom>Find Your Next Favorite Movie</Typography>

          <Stack direction="row" spacing={2}>
          <Link
              to="/Movies">
              <Button variant="contained" color='error'>
              Find Quick Movie
              </Button>
            </Link>
            <Link
              to="/Login">
              <Button variant="outlined" color='warning'>
                Log In/Sign Up
              </Button>
            </Link>
          </Stack> 
        </Container>

      </div>
      <div className="About-Us">
          <h2>About Us</h2>
          <Container maxWidth=''>
          Are you tired of endlessly scrolling through streaming platforms, unsure of what movie to watch next? Look no further! Our Movie Recommendation App is here to simplify your movie-watching experience and help you discover the perfect films tailored to your taste.
          Whether you're a fan of action-packed blockbusters, heartwarming romances, gripping thrillers, thought-provoking documentaries, or any other genre, our app has got you covered. We curate an ever-growing collection of films from all around the world, ranging from timeless classics to the latest releases, ensuring that there's always something for everyone.
           </Container>
          <Link to="/ContactUs">
            <Button variant="outlined" color="primary" sx={{pt: 1, mt: 1}}>
              Contact Us
            </Button>
          </Link>
      </div>
      <Footer />
    </>
  )
}

export default Home
