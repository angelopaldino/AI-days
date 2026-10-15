import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../style/LogoutButton.css';

const LogoutButton = ({ variant = 'outline' }) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <button 
      onClick={handleLogout} 
      className={`logout-btn logout-btn-${variant}`}
      aria-label="Esci dal sistema"
    >
      <span className="logout-btn-text">Log Out</span>
      <div className="logout-btn-glow"></div>
    </button>
  );
};

export default LogoutButton;
