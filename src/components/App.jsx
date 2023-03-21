import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './style/GlobalStyle';
import { Container } from './style/Container.styled';


const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Review = lazy(() => import('./Review')); 
const NotFound = lazy(() => import('../pages/NotFound')); 
const NavBar = lazy(() => import('./Navbar')); 


export const App = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
    <NavBar />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Container>
    </Suspense>    
  );
};
