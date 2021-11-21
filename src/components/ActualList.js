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
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setInnerHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('resize', handleResize);
    };
  });

  var numberOfCompletedTodos = 0;

  const deleteTask = (pid) => {
    var newData = [...data];
    for (let i = 0; i < newData.length; i++) {
      if (newData[i]['id'] === pid) {
        newData.splice(i, 1);
        break;
      }
    }
    setData(newData);
  };

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
  let unCompletedData = filteredData.filter((Item) => {
    return !Item['isCompleted'];
  });
  let completedData = filteredData.filter((Item) => {
    return Item['isCompleted'];
  });

  const UnCompletedList = unCompletedData.map((Item) => {
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
        deleteTask={deleteTask}
      />
    );
  });
  const CompletedList = completedData.map((Item) => {
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
        deleteTask={deleteTask}
      />
    );
  });
  console.log(innerHeight);
  return (
    <div
      className="list-actual"
      style={{ maxHeight: 'calc( ' + innerHeight + 'px - 300px)' }}
    >
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
