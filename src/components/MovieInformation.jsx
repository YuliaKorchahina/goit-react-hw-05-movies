
import { Link, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

const MovieInformation = ({movieId})=> {
    return (
    <>
        <h3>More information</h3>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <Outlet />
          <li>
            <Link to={`/movies/${movieId}/review`}>Review</Link>
          </li>
        </ul>
    </>
    )
};
MovieInformation.propTypes={
    movieId: PropTypes.string.isRequired
}

 export default MovieInformation;