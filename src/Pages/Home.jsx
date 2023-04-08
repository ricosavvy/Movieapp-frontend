import React from 'react'
import { useEffect } from "react";
import { Container, Typography, Stack } from '@mui/material';
import {Button} from '@mui/material';
import './pages.css'

const Home = () => {

  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/movie/popular?api_key=8f2c212a2c2a3b4a6ac6799584dcb594")
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // })

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '180213137emshf24cf18cd44d128p1d4440jsn7b38e5195953',
  //     'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  //   }
  // };
  
  // fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=t', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  return (
    <div className='Hero_Section'>
      <Container maxWidth='sm'>
        <Typography 
          variant='h2' 
          color='white'
          fontFamily='monospace' 
          gutterBottom>Find Your Next Favorite Movie</Typography>
        {/* <Typography 
          variant='h5' 
          align='center'  
          color='white'
          // paddingTop={'10'}
          fontFamily='monospace' 
           alignItems={'center'} marginLeft={'30%'} 
          gutterBottom>Get personalized movie recommendations based on your preferences</Typography> */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color='error'>
        Get Started
        </Button>
        <Button variant="outlined" color='warning'>
          About Us
        </Button>
      </Stack> 
        
      </Container>
    </div>
  )
}

export default Home
