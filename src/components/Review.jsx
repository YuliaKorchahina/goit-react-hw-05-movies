import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getMovieReviewById } from '../servises/Api';

const Review = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams(); 

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchReview = async () => {
      try {
        const resp = await getMovieReviewById(movieId);
        setReview(resp.results);
        setLoading(true);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReview();
  }, [movieId]);

  return (
    <>
      {review.length === 0 && (
        <>
          <p> Unfortunately, we have no information</p>
          <img
            src="http://surl.li/fqulq"
            alt="Not found hage"
            width={400}
          ></img>
        </>
      )}
      {review && (
        <ul>
          {review.map(({ id, author, content }) => (
            <>
              <li key={id}>
                <div>
                  <p> Autor: {author}</p>
                  <p>Review: {content}</p>
                </div>
              </li>
            </>
          ))}
        </ul>
      )}
      {loading && <p>...Loading</p>}
      {error && <p>Review load fail</p>}
    </>
  );
};

export default Review;

Review.protoTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.number.isRequired,
};
