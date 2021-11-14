import React, { useState, useEffect } from 'react';
import '../styles/SearchBar.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-icon">
        <FaSearch />
      </div>
      <input className="search-input"></input>
      <div className="search-cncl-btn">
        <FaTimes />
      </div>
    </div>
  );
};

export default SearchBar;
