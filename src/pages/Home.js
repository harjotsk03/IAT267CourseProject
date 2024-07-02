// src/pages/Home.js
import React from 'react';
import { useAuth } from '../components/LogIn/AuthContext';

export const Home = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className='bgColor h-screen'>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};
