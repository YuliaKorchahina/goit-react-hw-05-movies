import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMovieById } from 'servises/Api';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
// const DEFAULT_IMG_URL =
//   'https://images.prom.ua/211029177_w640_h640_211029177.jpg';

export const MovieDetails = () => {
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMovieById(movieId);
        setState(result);
        setLoading(true);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId, setLoading, setError, setState]);

  const goBack = () => navigate(-1);

  //   const imgUrl = poster_path => {
  //     console.log(imgUrl(state.poster_path));
  //     return  BASE_IMG_URL + poster_path
  //     // return poster_path ? BASE_IMG_URL + poster_path : DEFAULT_IMG_URL

  //   };

  //   const { poster_path } = state.poster_path;
  return (
    <>
    <button onClick={goBack}>Go back</button>
      {state && (
        <>
          {loading && <p>...Loading</p>}
          <h2>
            {state.title} ({state.release_date})
          </h2>
          <img src={BASE_IMG_URL + state.poster_path} alt={state.title} />
          <p>User Score: {state.vote_average}</p>
          <p>Overview</p>
          <p>{state.overview}</p>
          {/* <p>Genres</p> */}
        </>
      )}
      {error && <p>Movie load fail</p>}
    </>
  );
};


MovieDetails.protoTypes={
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.number.isRequired,
    vote_average : PropTypes.number.isRequired,
}
