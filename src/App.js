import './index.css'
import Home from './Pages/Home';
import User from './Pages/User';
import LogIn from './Pages/LogIn';
import { Box } from '@mui/material';
import NavBar from './Components/NavBar';
import MovieInfo from './Pages/MovieInfo';
import ContactUs from './Pages/ContactUs';
import MoviePage from './Pages/MoviePage';
import { Route, Routes } from 'react-router-dom';
import SearchedMovies from './Pages/SearchedMovies';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
    <Box>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Movies" element={<MoviePage />} />
          <Route exact path="/movie/:id" element={<MovieInfo />} />
          <Route exact path="/LogIn" element={<LogIn />} />
          <Route exact path="/Search/:data" element={<SearchedMovies />} />
          <Route exact path="/User" element={<User />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/SignUp" element={<Signup />} />
        </Routes>
      {/* <Footer /> */}
    </Box>
    </>
  );
}

export default App;
