import React from 'react';
import { Navigate} from 'react-router-dom';

const PrivateRoute = ({ element, allowedRoles, fallbackPath }) => {
  const userRole = localStorage.getItem('userRole');

  if (!userRole) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to={fallbackPath} />;
  }

  return element;
};

export default PrivateRoute;