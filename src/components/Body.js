import React, { useState, useEffect } from 'react';
import '../styles/Body.css';
import List from './List';
const Body = ({
  filteredData,
  data,
  setData,
  isDescending,
  setIsDescending,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="body-div">
      <div className="side-bar">SideBar</div>
      {/*will tell which filter we are on */}
      <List
        filteredData={filteredData}
        data={data}
        setData={setData}
        isDescending={isDescending}
        setIsDescending={setIsDescending}
        sortBy={sortBy}
        setSortBy={setSortBy}
      ></List>
      {/*will handle render and update of lists */}
    </div>
  );
};

export default Body;
