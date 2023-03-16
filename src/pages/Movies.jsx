import { getSearchMovie } from '../servises/Api';

import { useState, useEffect } from 'react';

export const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getSearchMoviebyQyery = async () => {
      try {
        const { data } = await getSearchMovie();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchMoviebyQyery();
  }, [search]);

  return (
    <>
      <p>Enter movie</p>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={search}
          onChange={setSearch}
        />
        <button type="submit" onClick={() => setSearch(movies)}>
          <span>Search</span>
        </button>
      </form>
      {/* <ul>
        {movies.map(({ id }) => {
          return <li key={id}></li>;
        })}
      </ul> */}
    </>
  );
};
