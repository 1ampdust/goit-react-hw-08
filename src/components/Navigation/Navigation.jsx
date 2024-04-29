//Navigation.jsx
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(logIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/tasks">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};