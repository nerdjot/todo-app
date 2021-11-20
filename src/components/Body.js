import React, { useState, useEffect } from 'react';
import '../styles/Body.css';
import List from './List';
import SideBar from './SideBar';
const Body = ({
  filteredData,
  data,
  setData,
  isDescending,
  setIsDescending,
  sortBy,
  setSortBy,
  filterName,
  setFilterName,
  searchKeyword,
}) => {
  return (
    <div className="body-div">
      <SideBar setFilterName={setFilterName} />
      {/*will tell which filter we are on */}
      <List
        filteredData={filteredData}
        data={data}
        setData={setData}
        isDescending={isDescending}
        setIsDescending={setIsDescending}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterName={filterName}
        searchKeyword={searchKeyword}
      ></List>
      {/*will handle render and update of lists */}
    </div>
  );
};

export default Body;
