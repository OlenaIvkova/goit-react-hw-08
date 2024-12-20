// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../redux/auth/selectors";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return isLoggedIn ? Component : <Navigate to={redirectTo} />;
// };

// export default PrivateRoute;

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ element, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? element : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,  
  redirectTo: PropTypes.string,  
};

export default PrivateRoute;

