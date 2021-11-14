import React, { useState, useEffect } from 'react';
import '../styles/SearchBar.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ searchKeyword, setSearchKeyword }) => {
  const [isSearchBarInFocus, setSearchBarInFocus] = useState(false);
  return (
    <div className={isSearchBarInFocus ? 'search-bar-focus' : 'search-bar'}>
      <div className="search-icon">
        <FaSearch />
      </div>
      <input
        className="search-input"
        placeholder={isSearchBarInFocus ? 'Search' : ''}
        onFocus={() => {
          setSearchBarInFocus(true);
        }}
        onBlur={() => {
          setSearchBarInFocus(false);
        }}
        onChange={(e) => setSearchKeyword(e.target.value)}
        value={searchKeyword}
      ></input>
      {searchKeyword !== '' ? (
        <div
          className="search-cncl-btn"
          onClick={() => {
            setSearchKeyword('');
          }}
        >
          <FaTimes />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
