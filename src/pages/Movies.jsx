import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../servises/Api';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

 const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useSearchParams();

  const movieQuery = search.get('movieQuery') ?? '';
  const getSearchMoviebyQuery = async () => {
    try {
      const { results } = await getSearchMovie(movieQuery);
      console.log(results);
      setMovies(results);
      if (results.length === 0) {
        return await Promise.reject(new Error(`" ${movieQuery} "`));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getSearchMoviebyQuery();
  // }, []);

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
        <button type="submit" onClick={() => null}><span>Search</span></button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
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
}

export default Movies;