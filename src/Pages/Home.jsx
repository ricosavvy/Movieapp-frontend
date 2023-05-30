import { React } from "react";
import { Container, Typography, Stack } from '@mui/material';
import { Link } from "react-router-dom";
import {Button} from '@mui/material';
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux';
import './pages.css'

const Home = () => {
  const isAuth = Boolean(useSelector((state) => state.token))
  const user = useSelector((state) => state.user)
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
              {isAuth ? 'Find New Movie': 'Find Quick Movie'}
              </Button>
            </Link>
            <Link
              to="/Login">
              <Button variant="outlined" color='warning'>
                {isAuth ? user.username + '': 'Login/Signup'}
              </Button>
            </Link>
          </Stack> 
        </Container>

      </div>
      <div className="About-Us">
          <h3>About Us</h3>
          <div className="about_us_text">
            <Container maxWidth=''>
            Are you tired of endlessly scrolling through streaming platforms, unsure of what movie to watch next? Look no further! Our Movie Recommendation App is here to simplify your movie-watching experience and help you discover the perfect films tailored to your taste.
            Whether you're a fan of action-packed blockbusters, heartwarming romances, gripping thrillers, thought-provoking documentaries, or any other genre, our app has got you covered. We curate an ever-growing collection of films from all around the world, ranging from timeless classics to the latest releases, ensuring that there's always something for everyone.
            </Container>
           </div>
          <Link to="/ContactUs">
            <Button variant="outlined" style={{color: 'white'}} sx={{pt: 1, mt: 2, mb:2}}>
              Contact Us
            </Button>
          </Link>
      </div>
      <Footer />
    </>
  )
}

export default Home
