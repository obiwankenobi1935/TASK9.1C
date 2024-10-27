import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './navbar.css';

function NavBar({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <nav className="nav-container">
      <div className="nav-logo">DEV@Deakin</div>
      <Link to="/" className="nav-link">Home</Link>
      <div className="nav-actions">
        {user ? (
          <button className="nav-logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button className="nav-login-btn">Log In</button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
