import {React, useEffect, useState} from 'react';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../state';
import Forms from '../Components/Form';
import "./MovieInfo.css";


const MovieInfo = () => {
  const{ id } = useParams();
  const dispatch = useDispatch();
  const[movieInfo, setMovie] = useState();
  const[Feedback, setFeedback] = useState([]);
  const token = useSelector((state) => state.token)

  console.log(token)
  useEffect(() => {
    getMovieInfo()
    window.scrollTo(0,0)
  }, [])

  const getMovieInfo = () => [
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => setMovie(data))
  ]

  const movielistsubmitting = () =>{
    dispatch(setMovies({
      id: id,
      name: movieInfo.original_title
    }))
  }
  // Returns info about the movie
  fetch(`https://movieapp-backend-production-a4be.up.railway.app/api/movies/${id}`, {
    method: 'GET',
    headers: {
       Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:3000'
    },
  })
  .then(response => {
    console.log(response.json())
  })
  .then(data => setFeedback(data))
  .catch(error => {
    console.log(error)
  })

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
              <button id='smtbtns' type="submit" value={true} onClick={movielistsubmitting}> 
                <AddIcon />Watch Later
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
{/* 
          <div className="reviews">
            <div className="review">
                <Typography variant='H6'>Overview </Typography> <br />
                <Typography variant='subtitle1'>Overview </Typography>
                <Typography variant='subtitle1'>Overview </Typography>
            </div> */}
            {
              Feedback &&
                Feedback.map(fdbk => (
                  <div className="reviews">
                    <div className='Review'>
                      <Typography variant='subtitle2'>{fdbk.rating}</Typography> <br />
                      <Typography variant='subtitle2'>{fdbk.review}</Typography>
                    </div>
                  </div>
                ))
            }
          </div>
        <Footer/>
    </>
  )
}

export default MovieInfo
