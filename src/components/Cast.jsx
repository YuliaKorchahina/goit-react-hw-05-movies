import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieCastById } from '../servises/Api';
import imgUrl from 'servises/utils/utils';

const Cast = () => {
  const [actors, setActors] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);
  const navigate = useNavigate();

  const fetchCast = async () => {
    try {
      const result = await getMovieCastById(movieId);
      setActors(result.cast);
      console.log(result.cast);
      setLoading(true);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCast();
  }, []);

  const goBack = () => navigate(-1);

  return (
    <>
      <button onClick={goBack}>Go back</button>
      {actors && (
        <ul>
          {actors.map(({ id, name, profile_path, character }) => (
            <>
              <li key={id}>Name: {name}</li>
              <li>
                <img src={imgUrl(profile_path)} alt={name} width={300} />
              </li>
              <li>Character: {character}</li>
            </>
          ))}
        </ul>
      )}
      {loading && <p>...Loading</p>}

      {error && <p>Cast load fail</p>}
    </>
  );
};

export default Cast;
