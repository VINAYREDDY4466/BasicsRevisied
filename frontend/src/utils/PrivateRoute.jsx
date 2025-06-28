// src/components/PrivateRoute.js
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = true; // or your auth logic
  return isAuthenticated ? children : <h1>Un authorised</h1>;
};

export default PrivateRoute;
