import {React, useEffect, useState} from 'react';
import Container from '../Components/Container';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import "./MovieInfo.css";
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import { Typography } from '@mui/material';
import Forms from '../Components/Form';


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
      .then(data => setMovie(data))
  ]

  return (
    <>
      <div className="movie__details">
        <div className='movie'>
            <div className="movie__pic">
              <img src={`https://image.tmdb.org/t/p/original${movieInfo && movieInfo.backdrop_path}`} alt="Poster" />
            </div>
        </div>

        <div className="movie__pic__overlay"></div>
          <div className="mainrow">
              <div className="movie__minipic">
                  <img src={`https://image.tmdb.org/t/p/original${movieInfo && movieInfo.poster_path}`} alt="Poster" />
              </div>

              <div className="strow">
                <div className="movie__title">
                  {movieInfo ? movieInfo.original_title: " "}
                </div>
              <div className="tagline">
                  {movieInfo ? movieInfo.tagline: " "}
              </div>

              <div className="ratings">
                <div className="rate">{movieInfo ? "Global rating: " + movieInfo.vote_average: " "}<StarIcon/>{" "}</div> 
                <div className="rate">{movieInfo ? "Local rating: " + movieInfo.vote_average: " "}<StarIcon/>{" "}</div>
              </div>
            </div>
        </div>


        <div className="third__row">
          <div className="thrdrow">
            <div className="genres">
              {movieInfo && movieInfo.genres ? movieInfo.genres.map(genre => (<><span className='genre' id={genre.id}>{genre.name}</span></>)) : " "}
            </div> 
            <br />
            <div className="status">
              {movieInfo ? "Original language: " + movieInfo.original_language: " "}
                <br /><br />
              {movieInfo ? " Release date: " + movieInfo.release_date: " "} 
            </div> 
          </div>
          <div className="like_btn">
              <button id='smtbtn' type="submit">
                <ThumbUpIcon />
              </button>
          </div>
        </div>
          
          <div className="secondmain">
            <div className="overview_templete">
              <div className="overview">
                {movieInfo ?  "\""+ movieInfo.overview: " "}
              </div>
            </div>
          </div>

          <div className="theForm">
            <Forms />
          </div>

          <div className="reviews">
            <div className="review">
                <Typography variant='H6'>Overview </Typography> <br />
                <Typography variant='subtitle1'>Overview </Typography>
                <Typography variant='subtitle1'>Overview </Typography>
            </div>
            <div className="review">
                <Typography variant='H6'>Overview </Typography> <br />
                <Typography variant='subtitle1'>Overview </Typography>
                <Typography variant='subtitle1'>Overview </Typography>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default MovieInfo
