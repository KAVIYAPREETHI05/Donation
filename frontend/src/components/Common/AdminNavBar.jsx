import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/admin">Home</Link></li>
        <li><Link to="/admin/notification">Notification</Link></li>
        <li><Link to="/admin/delivery">Delivery</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavBar;