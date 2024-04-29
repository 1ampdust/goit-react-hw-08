//RestrictedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logIn } from '../redux/auth/operations';

/**
 * - If the route is restricted and the user is logged in,
 *  render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(logIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
