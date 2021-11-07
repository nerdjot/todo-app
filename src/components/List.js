import React, { useState, useEffect } from 'react';
import '../styles/List.css';
import AddComponent from './AddComponent';
import ActualList from './ActualList';

const Body = () => {
  return (
    <div className="list-div">
      <div className="list-list-name">My Day</div>
      <div className="list-date">Saturday, October 23</div>
      <div className="list-view">
        <AddComponent></AddComponent>
        <ActualList />

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

export default Body;
