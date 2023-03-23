import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRef } from 'react';

import { getMovieById } from 'servises/Api';
import imgUrl from 'servises/utils/utils';
import styled from '../components/style.module.css';
import MovieInformation from 'components/MovieInformation';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const locationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMovieById(movieId);
        setMovie(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovie();
  }, [movieId]);

  const getReleaseDate = releaseDate => {
    return releaseDate ? new Date(releaseDate).getFullYear() : 'No information';
  };
  const genres = movie ? movie.genres.map(genre => genre.name).join(', ') : '';

  //   const poster_path = movie?.poster_path;
  const { poster_path } = movie ?? '';
  return (
    <>
      <Link className={styled.btn} to={locationRef.current}>
        Go back
      </Link>
      {movie && (
        <>
          <h2>
            {movie.title} ({getReleaseDate(movie.release_date)})
          </h2>
          <ul>
            <li>
              <img src={imgUrl(poster_path)} alt={movie.title} width={300} />
              <p>User Score: {movie.vote_average.toFixed(1)}</p>
              <p>Overview</p>
              <p>{movie.overview}</p>
              <p>Genres: {genres}</p>
            </li>
          </ul>
          <MovieInformation movieId={movieId} />
        </>
      )}
      {error && <p>Movie load fail</p>}
    </>
  );
};

MovieDetails.protoTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
};

export default MovieDetails;
