import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.wrapper}>
      <div>
        {isLoggedIn ? (
          <nav className={css.nav}>
            <NavLink className={getNavLinkClassName} to="/">
              Home
            </NavLink>
            <NavLink className={getNavLinkClassName} to="/contacts">
              Contacts
            </NavLink>
          </nav>
        ) : (
          <nav className={css.nav}>
            <NavLink className={getNavLinkClassName} to="/">
              Home
            </NavLink>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navigation;