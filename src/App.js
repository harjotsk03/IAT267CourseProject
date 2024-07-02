// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LogIn } from './pages/LogIn';
import { Home } from './pages/Home';
import { AuthProvider, useAuth } from './components/LogIn/AuthContext';
import PrivateRoute from './components/LogIn/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div className='app'>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route 
              path='/home' 
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              } 
            />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
