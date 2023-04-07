import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MoviePage from './Pages/MoviePage';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Movie" element={<MoviePage />} />
          <Route exact path="/Login" element={<LogIn />} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
