import React, { useState, useEffect, useRef } from 'react';
import '../styles/List.css';
import AddComponent from './AddComponent';
import ActualList from './ActualList';
import { FaSort } from 'react-icons/fa';
import SortMenu from './SortMenu';

const List = ({
  filteredData,
  data,
  setData,
  isDescending,
  setIsDescending,
  sortBy,
  setSortBy,
  filterName,
  searchKeyword,
}) => {
  const getTodaysDateString = () => {
    let lDateObj = new Date();
    let lDay = lDateObj.getDay();
    let lDate = lDateObj.getDate();
    let lMonth = lDateObj.getMonth();
    var weekday = new Array(7);
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';
    weekday[0] = 'Sunday';
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let lstrDay = weekday[lDay];
    let lstrMonth = months[lMonth];
    return lstrDay + ', ' + lstrMonth + ' ' + lDate;
  };
  return (
    <div className="list-div">
      <div className="list-details">
        <div className="list-name-date">
          <div className="list-list-name">{filterName}</div>
          {filterName == 'My day' ? (
            <div className="list-date">{getTodaysDateString()}</div>
          ) : (
            <></>
          )}
        </div>
        <div className="list-control">
          <SortMenu
            isDescending={isDescending}
            setIsDescending={setIsDescending}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
      </div>
      <div className="list-view">
        {searchKeyword === '' ? (
          <AddComponent data={data} setData={setData}></AddComponent>
        ) : (
          <></>
        )}

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
