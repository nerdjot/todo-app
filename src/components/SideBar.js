import React, { useState, useEffect } from 'react';
import '../styles/SideBar.css';
import {
  FaSun,
  FaCalendarAlt,
  FaStar,
  FaCheckCircle,
  FaHome,
} from 'react-icons/fa';
import FilterComp from './FilterComp.js';

const SideBar = ({ setFilterName }) => {
  const Filters = [
    {
      id: 0,
      name: 'My day',
      icon: FaSun,
    },
    // {
    //   id: 1,
    //   name: 'Planned',
    //   icon: FaCalendarAlt,
    // },
    {
      id: 2,
      name: 'Important',
      icon: FaStar,
    },
    {
      id: 3,
      name: 'Tasks',
      icon: FaHome,
    },
    // {
    //   id: 4,
    //   name: 'Completed',
    //   icon: FaCheckCircle,
    // },
  ];

  const [activeFilterId, setActiveFilterId] = useState(3);

  const FiltersRends = Filters.map((Filter) => {
    return (
      <FilterComp
        key={Filter['id']}
        id={Filter['id']}
        name={Filter['name']}
        Icon={Filter['icon']}
        onClick={() => {
          setFilterName(Filter['name']);
        }}
        activeFilterId={activeFilterId}
        setActiveFilterId={setActiveFilterId}
      />
    );
  });
  return <div className="side-bar">{FiltersRends}</div>;
};

export default SideBar;
