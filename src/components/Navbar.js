import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FaCheckCircle } from 'react-icons/fa';
import SearchBar from './SearchBar';

const Navbar = ({ searchKeyword, setSearchKeyword }) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <FaCheckCircle></FaCheckCircle>
      </div>
      <div className="navbar-app-name">Tasks</div>
      <SearchBar
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
    </div>
  );
};

export default Navbar;
