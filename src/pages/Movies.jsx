import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovie } from '../servises/Api';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useSearchParams();

const location =  useLocation();

  const movieQuery = search.get('movieQuery') ?? '';
  const getSearchMoviebyQuery = async () => {
    try {
      const { results } = await getSearchMovie(movieQuery);
      setMovies(results);
      if (results.length === 0) {
        return await Promise.reject(new Error(`" ${movieQuery} "`));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      getSearchMoviebyQuery();
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleSubmit = e => {
    e.preventDefault();
    getSearchMoviebyQuery();
  };

  return (
    <>
      <p>Enter movie title</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie"
          value={movieQuery}
          onChange={evt => setSearch({ movieQuery: evt.target.value })}
        />
        <button type="submit" onClick={() => null}>
          <span>Search</span>
        </button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Movies.protoTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Movies;
