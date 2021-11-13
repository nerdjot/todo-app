import React, { useState, useEffect } from 'react';
import '../styles/Body.css';
import List from './List';
const Body = ({ filteredData, data, setData }) => {
  return (
    <div className="body-div">
      <div className="side-bar">SideBar</div>
      {/*will tell which filter we are on */}
      <List filteredData={filteredData} data={data} setData={setData}></List>
      {/*will handle render and update of lists */}
    </div>
  );
};

export default Body;
