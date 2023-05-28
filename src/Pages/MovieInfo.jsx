import "./MovieInfo.css";
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import { setMovies } from '../state';
import Footer from '../Components/Footer';
import Rating from '@mui/material/Rating';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';


const Forms = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)

  const formik = useFormik({
    initialValues: {
      review: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      //rating
      fetch(`https://movieapp-backend-production-a4be.up.railway.app/api/movies/rate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control_Allow_Origin': 'https://localhost:3000'
        },
        body: JSON.stringify({user: user._id, movieId: id, rating: value})
      })
      .then(response => {
        console.log(response.json())
      })
      .catch(error => {
        console.log(error)
      })

      //rewiews
      fetch(`https://movieapp-backend-production-a4be.up.railway.app/api/movies/review`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control_Allow_Origin': 'https://localhost:3000'
        },
        body: JSON.stringify({user: user._id, movieId: id, review: values.review})
      })
      .then(response => {
        console.log(response.json())
      })
      .catch(error => {
        console.log(error)
      })
      setSubmitting(false);
      // console.log(id, values.review, value)
    },
  });
  
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    return(
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
          <Box sx={{width: 1200, display: 'flex', alignItems: 'center',}}>
              <input id="review" name="review" type="review" onChange={formik.handleChange} value={formik.values.review} />
              <Rating id='stars' name="hover-feedback" value={value} precision={0.5} onChange={(event, newValue) => { setValue(newValue); }} onChangeActive={(event, newHover) => { setHover(newHover);}} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
              <button id='smtbtn' type="submit"><SendIcon /></button>
          </Box>
      </form>
    </div>
    )
 }      

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
    const name = movieInfo.original_title;
    const movies = { id, name}
    dispatch(setMovies({
      movies
    }))
    // console.log(Movie)
  }
  //Returns info about the movie
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
