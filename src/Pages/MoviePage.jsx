import { React, useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';


const MoviePage = () => {
  
  const [ popularMovies, setPopularMovies ] = useState([])
  
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=8f2c212a2c2a3b4a6ac6799584dcb594")
      .then(response => response.json())
      .then(data => setPopularMovies(data.results))
  })
  
  return (
    <div>
      <div className="Movies">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={3}
              infiniteLoop={true}
              showStatus={false}            
            >
              {
                popularMovies.map(movie => (
                  <Link style={{textDecoration: 'none', color:'white'}} to={`/movie/${movie.id}`}>
                    <div className="posterImage">
                      <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                    </div>
                    <div className="posterImage__overlay">
                      <div className="posterImage__title">{movie ? movie.original_title: " "}</div>
                      <div className="posterImage__runtime">
                        {movie ? movie.release_date : " "}
                        <span className="posterImage__rating">
                          {movie ? movie.vote_average : " "}
                          <StarIcon/>{" "}
                        </span>
                      </div>
                      <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                    </div>
                  </Link>
                ))
              }
            </Carousel>
        </div>
    </div>
  )
}

export default MoviePage
