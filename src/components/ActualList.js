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

const ListActual = ({ filteredData, data, setData }) => {
  var numberOfCompletedTodos = 0;
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

  const UnCompletedList = filteredData.map((Item) => {
    if (!Item['isCompleted']) {
      return (
        <UnCompletedItem
          key={Item['id']}
          id={Item['id']}
          isFavourite={Item['isFavourite']}
          value={Item['value']}
          data={data}
          setData={setData}
          toggleFavourite={toggleFavourite}
          toggleCompleted={toggleCompleted}
        />
      );
    }
  });
  const CompletedList = filteredData.map((Item) => {
    if (Item['isCompleted']) {
      numberOfCompletedTodos++;
      return (
        <CompletedItem
          key={Item['id']}
          id={Item['id']}
          isFavourite={Item['isFavourite']}
          value={Item['value']}
          data={data}
          setData={setData}
          toggleFavourite={toggleFavourite}
          toggleCompleted={toggleCompleted}
        />
      );
    }
  });
  return (
    <div className="list-actual">
      {UnCompletedList}

      {numberOfCompletedTodos != 0 ? (
        <details>
          <summary>
            <div className="summary-completed">
              Completed
              <span className="number-completed">{numberOfCompletedTodos}</span>
            </div>
          </summary>
          {CompletedList}
        </details>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default ListActual;
