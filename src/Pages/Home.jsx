import React from 'react'
import { useEffect } from "react";
import './pages.css'

const Home = () => {

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=8f2c212a2c2a3b4a6ac6799584dcb594")
      .then(response => response.json())
      .then(data => console.log(data))
  })

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '180213137emshf24cf18cd44d128p1d4440jsn7b38e5195953',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  
  fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=t', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <div>
      
    </div>
  )
}

export default Home
