import React from 'react';

const Navbar = ({ logoText }) => {
  return (
    <nav className="dp-navbar">
      <div className="dp-logo">{logoText}</div>
      <div className="dp-nav-actions">
        <button className="dp-nav-btn">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
        <button className="dp-nav-btn">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
