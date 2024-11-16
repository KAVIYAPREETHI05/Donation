import React from 'react';
import { Link } from 'react-router-dom';

const UserNavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/user">Home</Link></li>
        <li><Link to="/user/donate">Donate</Link></li>
        <li><Link to="/user/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default UserNavBar;