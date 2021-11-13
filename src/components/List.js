import React, { useState, useEffect } from 'react';
import '../styles/List.css';
import AddComponent from './AddComponent';
import ActualList from './ActualList';

const List = ({ filteredData, data, setData }) => {
  // const [data, setData] = useState([
  //   {
  //     id: 0,
  //     value: 'Bring eggs from Mall',
  //     isCompleted: false,
  //     isFavourite: true,
  //     creationTime: new Date(2018, 11, 24, 10, 33, 30, 0)
  //   },
  //   {
  //     id: 1,
  //     value: 'Bring tomatos from Mall',
  //     isCompleted: false,
  //     isFavourite: false,
  //     creationTime: new Date(2018, 12, 24, 10, 33, 30, 0)
  //   },
  //   {
  //     id: 2,
  //     value: 'Bring chicken from Mall',
  //     isCompleted: true,
  //     isFavourite: true,
  //     creationTime: new Date(2018, 10, 24, 10, 33, 30, 0)
  //   },
  //   {
  //     id: 3,
  //     value: 'Bring fish from Mall',
  //     isCompleted: true,
  //     isFavourite: false,
  //     creationTime: new Date(2020, 11, 24, 10, 33, 30, 0)
  //   },
  // ]);
  return (
    <div className="list-div">
      <div className="list-list-name">My Day</div>
      <div className="list-date">Saturday, October 23</div>
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
