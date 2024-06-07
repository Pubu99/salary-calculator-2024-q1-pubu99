import React from 'react';
import { FaBell, FaUser, FaAngleDown } from 'react-icons/fa';
import './UpperBar.css';

const UpperBar = () => {
  return (
    <div className="upper-bar">
      <h1>Dashboard</h1>
      <div className="upper-bar-icons">
        <FaBell className="icon" />
        <FaUser className="icon" />
        <FaAngleDown className="icon" />
      </div>
    </div>
  );
};

export default UpperBar;
