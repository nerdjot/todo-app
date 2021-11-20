import React, { useState, useEffect } from 'react';
import '../styles/SideBar.css';
import { FaSun } from 'react-icons/fa';

const FilterComp = ({ Icon, name, onClick }) => {
  return (
    <div className="filter-comp" onClick={onClick}>
      <div className="filter-icon">
        <Icon />
      </div>
      <div className="filter-name">{name}</div>
    </div>
  );
};

export default FilterComp;
