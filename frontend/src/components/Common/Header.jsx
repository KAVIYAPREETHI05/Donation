import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; // Import the CSS file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to track the user role ('user' or 'admin')
  const [role, setRole] = useState('');

  // Simulate role determination logic (Replace with actual logic)
  useEffect(() => {
    // Example: Fetch from API, or get from localStorage/session
    const loggedInUserRole = localStorage.getItem('role') || 'user'; // Example: Replace with real role
    setRole(loggedInUserRole);
  }, []);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="nav-bar">
        <div className="logo">
          <Link to="/">Donation Platform</Link>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          {role === 'user' && (
            <>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </>
          )}
          {role === 'admin' && (
            <>
              <li><Link to="/notifications">Notifications</Link></li>
              <li><Link to="/delivery">Delivery</Link></li>
            </>
          )}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </nav>
    </header>
  );
}

export default Header;
