import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRout = () => {
  const logininfo = JSON.parse(localStorage.getItem("signin"));

  const isAuthenticated = logininfo !== null && logininfo.IsSignin;

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRout;
