import {React, useEffect, useState} from 'react';
import "./pages.css";
import { useParams } from 'react-router-dom';


const MovieInfo = () => {
  const[movieInfo, setMovie] = useState();
  const{ id } = useParams();

  useEffect(() => {
    getMovieInfo()
    window.scrollTo(0,0)
  }, [])

  const getMovieInfo = () => [
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => console.log(data))
  ]
  return (
    <div>
      <h1 style={{fontSize: "200px" }}>The Details</h1>
    </div>
  )
}

export default MovieInfo
