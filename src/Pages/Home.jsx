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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae a eum obcaecati! Blanditiis enim id culpa debitis explicabo, quos quasi similique saepe. Itaque alias magni corrupti in tempore autem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ex voluptate similique totam illum rem porr quis deleniti non harum, id ea assumenda quod ipsum, architecto ratione itaque labore eligendi!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non animi autem praesentium. Aliquam enim natus vitaeautem unde deserunt cum atque hic, esse nulla minima, sunt, consectetur quae necessitatibus sit.
          </Container>
          <Link to="/ContactUs">
            <Button variant="outlined" color="primary">
              Contact Us
            </Button>
          </Link>
      </div>
      <Footer />
    </>
  )
}

export default Home
