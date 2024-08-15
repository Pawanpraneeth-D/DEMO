// src/components/SignOut.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session (e.g., clearing local storage)
    localStorage.removeItem('userToken');
    
    // Redirect to the login page
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <h2>Signing Out...</h2>
    </div>
  );
};

export default SignOut;
