import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <nav className={css.nav}>
        <NavLink
          className={clsx(css.link, css.navLink)}
          activeClassName={css.active}
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className={clsx(css.link, css.navLink)}
          activeClassName={css.active}
          to="/login"
        >
          Log In
        </NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
