import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'

const Protect = ({ children }) => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  if (!user) {
    return navigate('/home');
    // return <Navigate to='/' />;
  }

  return children;
};

export default Protect;