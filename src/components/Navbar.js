import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FaCheckCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <FaCheckCircle></FaCheckCircle>
      To Do App
    </div>
  );
};

export default Navbar;
