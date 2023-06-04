import "./MovieInfo.css";
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Footer from '../Components/Footer';
import Rating from '@mui/material/Rating';
import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


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
      fetch(`https://movieapp-backend-production-a4be.up.railway.app/api/movies/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control_Allow_Origin': 'https://localhost:3000'
        },
        body: JSON.stringify({movie: id})
      })
      .then(response => response.json())
      .catch(error => {
        console.log(error)
      })
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
      .then(response => response.json())
      .catch(error => {
        console.log(error)
      })
      
      fetch(`https://movieapp-backend-production-a4be.up.railway.app/api/movies/review`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control_Allow_Origin': 'https://localhost:3000'
        },
        body: JSON.stringify({username: user.username,user: user._id, movieId: id, content: values.review})
      })
      .then(response => {
        response.json()
        alert('Rating added')})
      .catch(error => {
        console.log(error)
      })
      setSubmitting(false);
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
  const[movieInfo, setMovie] = useState([]);
  const[Recommended, setRecommendion] = useState([]);
  const[Feedback, setFeedback] = useState([]);
  const token = useSelector((state) => state.token)
  const user = useSelector((state) => state.user)
  const FeedbackArray = Feedback.reviews;

  // useEffect(() => {
  //   getMovieInfo()
  //   window.scrollTo(0,0)
  // }, [])

  // const getMovieInfo = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => setMovie(data))
  // }

  const movielistsubmitting = () =>{
    fetch(`https://movieapp-backend-production-a4be.up.railway.app/api/watchlist/add`, {
    method: 'POST',
    headers: {
       Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:3000'
    },
    body: JSON.stringify({userId: user._id, movieId: id, movieName: movieInfo.original_title})
  })
  .then(response => {
    response.json();
    alert('Added to watch later');
  })
  .catch(error => {
    console.log(error)
  })

    // console.log(Movie)
  }
  //Returns info about the movie
  // useEffect(() => {
    // }, [])
    const movieReviews = () => {
      fetch(`https://movieapp-backend-production-a4be.up.railway.app/api/movies/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://localhost:3000'
        },
      })
      .then(response => response.json())
      .then(data => { 
        if(Array.isArray(data.reviews))
        {
        setFeedback(data)}
      }
        )
      .catch(error => {
        console.log(error)
      })      
  }  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTU4ZDMwMDViOTAwN2I4NzQ1ODI2YjljYWJiMmM1MyIsInN1YiI6IjY0MzA0OTU4MTI4M2U5MDBmNTI4Yzc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xkY_WF8xvsLmgEhC3wbZBZdQ8L1cQa9fhyD2kcPO04c'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setRecommendion(response.results))
    .catch(err => console.error(err));

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
                <div className="rate">{
                Feedback ? "Local rating: " + Feedback.rating: "Local Rating: 0" 
                }<StarIcon/>{" "}
                </div>
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
          <div className="reviews_btn">
            <div className="like_btn">
                <button id='smtbtns' type="submit" value={true} onClick={movieReviews}> 
                Reviews
                </button>
            </div>
          </div>

          <div className="review_overlay">
            {
              (Array.isArray(FeedbackArray) ?
                FeedbackArray.map(fdbk => (
                  <div className="reviews">
                    <div className='Review'>
                      {/* <Typography variant='subtitle2'>{' '}</Typography> */}
                      <Typography variant='subtitle1'>{fdbk.content}</Typography>
                      <Typography variant='subtitle2'>{'by - ' + fdbk.username}</Typography>
                    </div>
                  </div>
                  // console.log(fdbk)
                )) : " "
              )
                }
              </div>

              <div className='movie__list'>
                {/* <div className="recommendations"><Typography varient='H4'>Recommended</Typography></div> */}
    {
            Recommended.map(movie => (
                <div className='movie__Item'>
                <Link style={{textDecoration: 'none', color:'white'}} to={`/movie/${movie.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia className='cardmedia'
                        component="img"
                        height="200"
                        image={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                        alt="movie id"
                        />
                        <CardContent className='cardcontent'>
                        <Typography gutterBottom variant="h5" component="div">
                            {movie ? movie.original_title: " "}
                        </Typography>
                        <Typography variant="body2" gutterBottom style={{}}>
                            {movie ? movie.overview : ""}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
                </div>
            ))
            // console.log(Recommended)
        }
        </div>
          </div>
        <Footer/>
    </>
  )
}

export default MovieInfo
