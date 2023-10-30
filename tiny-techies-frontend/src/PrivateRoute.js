import React from 'react';
import { Navigate} from 'react-router-dom';

const PrivateRoute = ({ element, allowedRoles, fallbackPath }) => {
  const userRole = localStorage.getItem('userRole');

  if (!userRole) {
    return <Navigate to="/login" />;
  }

  console.log(typeof allowedRoles)
  console.log(typeof userRole)
  console.log(allowedRoles != userRole)

  if (allowedRoles != userRole) {
    return <Navigate to={fallbackPath} />;
  }

  return element;
};

export default PrivateRoute;