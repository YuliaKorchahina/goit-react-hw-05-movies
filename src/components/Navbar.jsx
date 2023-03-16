import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const getClassName = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
};

export const NavBar = () => {
  return (
    <ul className={styles.navbar}>
      <li>
        <NavLink className={getClassName} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={getClassName} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};
