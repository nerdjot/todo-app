import React, { useState, useEffect } from 'react';
import './styles/styles.css';

import Navbar from './components/Navbar';
import Body from './components/Body';
import { GetComparerFunc } from './components/Comparer.js';
import { GetFilter } from './components/Filterer.js';

export default function App() {
  const [data, setData] = useState([
    {
      id: 0,
      value: 'dBring eggs from Mall',
      isCompleted: false,
      isFavourite: true,
      creationTime: new Date(2020, 11, 24, 10, 33, 30, 0),
    },
    {
      id: 1,
      value: 'cBring tomatos from Mall',
      isCompleted: false,
      isFavourite: false,
      creationTime: new Date(2018, 12, 24, 10, 33, 30, 0),
    },
    {
      id: 2,
      value: 'aBring chicken from Mall',
      isCompleted: true,
      isFavourite: true,
      creationTime: new Date(2018, 10, 24, 10, 33, 30, 0),
    },
    {
      id: 3,
      value: 'bBring fish from Mall',
      isCompleted: true,
      isFavourite: false,
      creationTime: new Date(2020, 11, 24, 10, 33, 30, 0),
    },
  ]);

  const [filterName, setFilterName] = useState('My day');

  const [sortBy, setSortBy] = useState('');

  const [isDescending, setIsDescending] = useState(true);

  const [searchKeyword, setSearchKeyword] = useState('');

  const getFilteredData = () => {
    //apply all filters
    let lCopyData = [];
    //1. filter view
    let lFilter = GetFilter(filterName);
    console.log(filterName);
    lCopyData = data.filter((todo) => lFilter(todo));
    //2. search filter
    lCopyData = lCopyData.filter((todo) => containsSearchKeyword(todo));
    //3. sort
    let lComparerFunc = GetComparerFunc(sortBy, isDescending);
    lCopyData.sort(lComparerFunc);
    return lCopyData;
  };

  const containsSearchKeyword = (todo) => {
    return todo['value'].toLowerCase().includes(searchKeyword);
  };

  let lFilteredData = getFilteredData();

  return (
    <div>
      <Navbar
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      ></Navbar>
      {/*search bar will be here*/}
      <Body
        filteredData={lFilteredData}
        data={data}
        setData={setData}
        isDescending={isDescending}
        setIsDescending={setIsDescending}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterName={filterName}
        setFilterName={setFilterName}
        searchKeyword={searchKeyword}
      ></Body>
    </div>
  );
}
