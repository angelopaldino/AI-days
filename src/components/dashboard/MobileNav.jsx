import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'home', label: 'Home' },
    { path: '/dashboard', icon: 'query_stats', label: 'Analisi' },
    { path: '/account', icon: 'person', label: 'Account' },
  ];

  return (
    <nav className="dp-mobile-nav">
      {navItems.map((item) => (
        <Link 
          key={item.path}
          className={`dp-mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`} 
          to={item.path}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="dp-mobile-nav-text">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MobileNav;
