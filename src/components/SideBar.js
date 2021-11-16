import React, { useState, useEffect } from 'react';
import '../styles/SideBar.css';
import { FaSun } from 'react-icons/fa';
import FilterComp from 'FilterComp.js';

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="filter-comp">
        <div className="filter-icon">
          <FaSun />
        </div>
        <div className="filter-name">My day</div>
      </div>
    </div>
  );
};

export default SideBar;
