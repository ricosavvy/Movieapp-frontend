import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './Components/NavBar';
import MoviePage from './Pages/MoviePage';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Signup from './Pages/Signup';
import User from './Pages/User';
// import ContactUs from './Pages/ContactUs';
// import './Pages/ContactUs.css';
import './index.css'

function App() {
  return (
    <>
    <Box>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Movies" element={<MoviePage />} />
          <Route exact path="/movie/:id" element={<MovieInfo />} />
          <Route exact path="/Login" element={<LogIn />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/User" element={<User />} />
          {/* <Route exact path="/ContactUs" element={<ContactUs />} /> */}
        </Routes>
      {/* <Footer /> */}
    </Box>
    </>
  );
}

export default App;
