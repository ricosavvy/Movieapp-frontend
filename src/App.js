import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MoviePage from './Pages/MoviePage';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Signup from './Pages/Signup';
import User from './Pages/User';

import './index.css'

function App() {
  return (
    <>
    <Box>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Movie" element={<MoviePage />} />
          <Route exact path="/Login" element={<LogIn />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/User" element={<User />} />
        </Routes>
      <Footer />
    </Box>
    </>
  );
}

export default App;
