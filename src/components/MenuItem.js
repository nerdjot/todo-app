import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FaCheckCircle } from 'react-icons/fa';

const MenuItem = ({ label, Icon, onClick }) => {
  return (
    <div
      className="menu-item"
      onClick={() => {
        onClick();
      }}
    >
      <div className="menu-icon">{Icon}</div>
      <div className="menu-label">{label}</div>
    </div>
  );
};

export default MenuItem;
