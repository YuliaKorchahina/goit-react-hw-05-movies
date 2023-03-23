import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getMovieCastById } from '../servises/Api';
import imgUrl from 'servises/utils/utils';
import styled from './style.module.css';

const Cast = () => {
  const [actors, setActors] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const result = await getMovieCastById(movieId);
        setActors(result.cast);
        setLoading(true);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]); 

  return (
    <>
   
      {actors && (
        <ul className={styled.list}>
          {actors.map(({ id, name, profile_path, character }) => (
            <>
              <li key={id}>
                <div>
                  <p>Name: {name}</p>
                  <img src={imgUrl(profile_path)} alt={name} width={300} />
                  <p>Character: {character}</p>
                </div>
              </li>
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

Cast.protoTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profile_pathe: PropTypes.number.isRequired,
  character: PropTypes.number.isRequired,
};
