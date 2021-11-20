import React, { useState, useEffect } from 'react';
import '../styles/SideBar.css';
import { FaSun } from 'react-icons/fa';

const FilterComp = ({
  id,
  Icon,
  name,
  onClick,
  activeFilterId,
  setActiveFilterId,
}) => {
  const handleOnClick = () => {
    onClick();
    setActiveFilterId(id);
  };
  return (
    <div
      className={activeFilterId == id ? 'filter-comp-activate' : 'filter-comp'}
      onClick={() => {
        handleOnClick();
      }}
    >
      <div className="filter-icon">
        <Icon />
      </div>
      <div className="filter-name">{name}</div>
    </div>
  );
};

export default FilterComp;
