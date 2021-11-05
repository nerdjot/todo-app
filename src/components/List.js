import React, { useState, useEffect } from 'react';
import '../styles/List.css';
import AddComponent from './AddComponent';
import { FaCheckCircle, FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

const Body = () => {
  return (
    <div className="list-div">
      <div className="list-list-name">My Day</div>
      <div className="list-date">Saturday, October 23</div>
      <div className="list-view">
        <AddComponent></AddComponent>
        <div className="list-actual">
          <div className="internal">
            <FaRegCircle />
            <div className="internal-internal">in</div>
          </div>
          <div className="internal">internal</div>
          <div className="internal">internal</div>
          <div className="internal">internal</div>
        </div>

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
