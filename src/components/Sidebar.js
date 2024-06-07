// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Acmmy Solutions</h2>
      <nav>
        <ul>
          <li className="active"><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
