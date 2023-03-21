import { getTrendingMovie } from '../servises/Api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '../components/style.module.css'

 const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await getTrendingMovie();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
 
  return (
    <>
      <p>Trending today</p>
      <ul >
        {movies.map(({ title, id }) => {
          return <li key={id} className={styled.item}>
            <Link to={`/movies/${id}`} movies={movies} className={styled.link}>{title}</Link>
            </li>;
        })}
      </ul>
    </>
  );
};

Home.protoTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Home;