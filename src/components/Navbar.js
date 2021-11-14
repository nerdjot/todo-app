import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FaCheckCircle } from 'react-icons/fa';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <FaCheckCircle></FaCheckCircle>
      </div>
      <div className="navbar-app-name">Tasks</div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
