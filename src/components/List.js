import React, { useState, useEffect } from 'react';
import '../styles/List.css';
import AddComponent from './AddComponent';
import ActualList from './ActualList';

const List = () => {
  const [data, setData] = useState([
    {
      id: 0,
      value: 'Bring eggs from Mall',
      isCompleted: false,
      isFavourite: true,
    },
    {
      id: 1,
      value: 'Bring tomatos from Mall',
      isCompleted: false,
      isFavourite: false,
    },
    {
      id: 2,
      value: 'Bring chicken from Mall',
      isCompleted: true,
      isFavourite: true,
    },
    {
      id: 3,
      value: 'Bring fish from Mall',
      isCompleted: true,
      isFavourite: false,
    },
  ]);
  return (
    <div className="list-div">
      <div className="list-list-name">My Day</div>
      <div className="list-date">Saturday, October 23</div>
      <div className="list-view">
        <AddComponent data={data} setData={setData}></AddComponent>
        <ActualList data={data} setData={setData} />

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
