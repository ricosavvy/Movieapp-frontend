import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const SearchedMovies = () => {
    const { data } = useParams();
    const [ SearchedMovies, setSearchedMovies ] = useState([])
    useEffect(() => {
        getSearchMovieInfo()
        window.scrollTo(0,0)
      }, [])
    
      const getSearchMovieInfo = () => [
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${data}`)
          .then(response => response.json())
          .then(data => setSearchedMovies(data.results))
      ]

    return (
        <div>
            <div className='movie__list'>
    {
            SearchedMovies.map(movie => (
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
        </div>
  )
}

export default SearchedMovies
