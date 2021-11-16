import React, { useState, useEffect } from 'react';
import '../styles/SideBar.css';
import { FaSun, FaCalendarAlt, FaStar } from 'react-icons/fa';
import FilterComp from './FilterComp.js';

const SideBar = () => {
  const Filters = [
    {
      id: 0,
      name: 'My day',
      icon: FaSun,
    },
    {
      id: 1,
      name: 'Planned',
      icon: FaCalendarAlt,
    },
    {
      id: 2,
      name: 'Important',
      icon: FaStar,
    },
  ];

  const FiltersRends = Filters.map((Filter) => {
    return (
      <FilterComp
        key={Filter['id']}
        name={Filter['name']}
        Icon={Filter['icon']}
      />
    );
  });
  return <div className="side-bar">{FiltersRends}</div>;
};

export default SideBar;
