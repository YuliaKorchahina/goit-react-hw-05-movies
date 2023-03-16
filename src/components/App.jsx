import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import {MovieDetails} from '../pages/MovieDetails'
import {NotFound} from '../pages/NotFound'
import { NavBar } from './Navbar';

export const App = () => {
  return (
   <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path='/movies/:movieId' element={<MovieDetails/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
};
