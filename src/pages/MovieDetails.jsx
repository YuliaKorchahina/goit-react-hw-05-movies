import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// import imgUrl from '../utils/utils'
import { getMovieById } from 'servises/Api';
import imgUrl from 'servises/utils/utils';



export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const navigate = useNavigate();

  const fetchMovie = async () => {
    try {
      const result = await getMovieById(movieId);
      setMovie(result);
      setLoading(true);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [movieId, setLoading, setError, setMovie]);

  const goBack = () => navigate(-1);

  const getReleaseDate = releaseDate => {
    return releaseDate ? new Date(releaseDate).getFullYear() : 'No information';
  };

  //   const poster_path = movie?.poster_path;
  const { poster_path } = movie ?? '';
  return (
    <>
      <button onClick={goBack}>Go back</button>
      {movie && (
        <>
          {loading && <p>...Loading</p>}
          <h2>
            {movie.title} ({getReleaseDate(movie.release_date)})
          </h2>
          <ul>
            <img src={imgUrl(poster_path)} alt={movie.title} width={300} />
            <li>
              <p>User Score: {movie.vote_average.toFixed(1)}</p>
            </li>
            <li>
              <p>Overview</p>
            </li>
            <li>
              <p>{movie.overview}</p>
            </li>
          </ul>
          {/* <p>Genres</p> */}

          <h3>More information</h3>
          <ul>
            <li>
              <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${movieId}/review`}>Review</Link>
            </li>
          </ul>
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
