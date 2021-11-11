import React, { useState, useEffect } from 'react';
import {
  FaCheckCircle,
  FaRegCheckCircle,
  FaRegCircle,
  FaStar,
  FaRegStar,
} from 'react-icons/fa';

import UnCompletedItem from './UnCompletedItem';
import CompletedItem from './CompletedItem';

const ListActual = ({ data, setData }) => {

  const toggleCompleted = (pid) => {
    var newData = [...data];
    for (let i = 0; i < newData.length; i++) {
      if (newData[i]['id'] === pid) {
        newData[i]['isCompleted'] = !newData[i]['isCompleted'];
      }
    }
    setData(newData);
  };

  const toggleFavourite = (pid) => {
    var newData = [...data];
    for (let i = 0; i < newData.length; i++) {
      if (newData[i]['id'] === pid) {
        newData[i]['isFavourite'] = !newData[i]['isFavourite'];
      }
    }
    setData(newData);
  };

  const UnCompletedList = data.map((Item) => {
    if (!Item['isCompleted']) {
      return (
        <UnCompletedItem
          id={Item['id']}
          isFavourite={Item['isFavourite']}
          value={Item['value']}
          data={data}
          setData={setData}
          toggleFavourite={toggleFavourite}
          toggleCompleted = {toggleCompleted}
        />
      );
    }
  });
  const CompletedList = data.map((Item) => {
    if (Item['isCompleted']) {
      return (
        <CompletedItem
          id={Item['id']}
          isFavourite={Item['isFavourite']}
          value={Item['value']}
          data={data}
          setData={setData}
          toggleFavourite={toggleFavourite}
          toggleCompleted = {toggleCompleted}
        />
      );
    }
  });
  return (
    <div className="list-actual">
      {UnCompletedList}
      <details>
        <summary>
          <div className="summary">Completed1</div>
        </summary>
        {CompletedList}
      </details>
    </div>
  );
};

export default ListActual;
