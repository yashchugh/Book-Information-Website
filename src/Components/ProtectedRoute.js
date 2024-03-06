import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ element, isLoggedIn, ...props }) => {
  if (isLoggedIn) {
    return <Route {...props} element={element} />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
