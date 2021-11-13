import React, { useState, useEffect, useRef } from 'react';
import '../styles/List.css';
import AddComponent from './AddComponent';
import ActualList from './ActualList';
import { FaSort } from 'react-icons/fa';
import ButtonMenu from './ButtonMenu';

const List = ({ filteredData, data, setData }) => {
  return (
    <div className="list-div">
      <div className="list-details">
        <div className="list-name-date">
          <div className="list-list-name">My Day</div>
          <div className="list-date">Saturday, October 23</div>
        </div>
        <div className="list-control">
          <ButtonMenu />
        </div>
      </div>
      <div className="list-view">
        <AddComponent data={data} setData={setData}></AddComponent>
        <ActualList filteredData={filteredData} data={data} setData={setData} />

        <div className="list-empty">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default List;
