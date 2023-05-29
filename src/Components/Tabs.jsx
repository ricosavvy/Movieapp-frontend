import { React, useEffect, useState } from 'react';
import './Components.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function LabTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [ popularMovies, setPopularMovies ] = useState([])
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setPopularMovies(data.results))
  }, [])

//   const [ recommendation, setRecommendation ] = useState([])
  
//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)
//       .then(response => response.json())
//       .then(data => setRecommendation(data.results))
//   }, [])

  const [ NowPlaying, setNowPlaying ] = useState([])
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => setNowPlaying(data.results))
  }, [])

  const [ TopRatedMovies, setTopRatedMovies ] = useState([])
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setTopRatedMovies(data.results))
  }, [])

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor="inherit" indicatorColor="primary" aria-label="movie categories">
            <Tab label="Popular" value="1" />
            <Tab label="Now playing" value="2" />
            <Tab label="Top Rated" value="3" />
            <Tab label="My Movies" value="4" />
          </TabList>
        </Box>

    {/* Popular Movies */}
    <TabPanel value="1">
        <div className='movie__list'>
        {
            popularMovies.map(movie => (
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
        }
        </div>
    </TabPanel>

    {/* Now Paying */}
    <TabPanel value="2">
    <div className='movie__list'>
    {
            NowPlaying.map(movie => (
                <div className='movie__Item'>
                <Link style={{textDecoration: 'none', color:'white'}} to={`/movie/${movie.id}`}>
                <Card sx={{ maxWidth: 345}}>
                    <CardActionArea>
                        <CardMedia className='cardmedia'
                        component="img"
                        height="200"
                        image={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                        alt="movie id"
                        />
                        <CardContent className='cardcontent'>
                        <Typography gutterBottom variant="h5" component="div" style={{}}>
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
        }
        </div>
    </TabPanel>

    {/* recommendation */}
    {/* <TabPanel value="3">
    <div className='movie__list'>
    {
            setRecommendation.map(movie => (
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
        }
        </div>
    </TabPanel> */}

    {/* Top Rated */}
    <TabPanel value="3">
    <div className='movie__list'>
    {
            TopRatedMovies.map(movie => (
                <div className='movie__Item'>
                <Link style={{textDecoration: 'none', color:'white'}} to={`/movie/${movie.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia className='cardmedia'
                        component="img"
                        height="300"
                        image={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                        alt="movie id"
                        />
                        <CardContent className='cardcontent'>
                        <Typography gutterBottom variant="h5" component="div" style={{}}>
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
        }
        </div>
    </TabPanel>
    </TabContext>
    </Box>
  );
}