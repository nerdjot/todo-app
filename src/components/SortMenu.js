import React, { useState, useEffect } from 'react';
import {
  FaRegStar,
  FaRegCalendar,
  FaSortAlphaUp,
  FaRegCalendarPlus,
  FaRegCalendarTimes,
  FaArrowUp,
  FaArrowDown,
  FaTimes,
} from 'react-icons/fa';
import ButtonMenu from './ButtonMenu';
import '../styles/SortMenu.css';

const SortMenu = ({ isDescending, setIsDescending, sortBy, setSortBy }) => {
  const [shouldShowSortMenu, setShouldShowSortMenu] = useState(false);

  const SortMenuDetails = [
    {
      icon: <FaSortAlphaUp />,
      label: 'Alphabetically',
      onClick: () => {
        setSortBy('alphabetical order');
        setShouldShowSortMenu(false);
      },
    },
    {
      icon: <FaRegCalendarPlus />,
      label: 'Creation Date',
      onClick: () => {
        setSortBy('creation date');
        setShouldShowSortMenu(false);
      },
    },
    {
      icon: <FaRegStar />,
      label: 'Importance',
      onClick: () => {
        setSortBy('importance');
        setShouldShowSortMenu(false);
      },
    },
    {
      icon: <FaRegCalendarTimes />,
      label: 'Due Date',
      onClick: () => {
        return true;
      },
    },
  ];

  const FlipIsDescending = () => {
    setIsDescending(!isDescending);
  };

  const GoToDefaultSorting = () => {
    setSortBy('');
  };

  return (
    <div className="sort-menu">
      <ButtonMenu
        menuDetails={SortMenuDetails}
        shouldShowSortMenu={shouldShowSortMenu}
        setShouldShowSortMenu={setShouldShowSortMenu}
      />
      {sortBy === '' ? (
        <></>
      ) : (
        <div className="sorted-by-comp">
          <div
            className="sort-menu-btn"
            onClick={() => {
              FlipIsDescending();
            }}
          >
            {isDescending ? <FaArrowDown /> : <FaArrowUp />}
          </div>

          <div className="sort-menu-label">{'Sorted by ' + sortBy}</div>
          <div
            className="sort-menu-btn"
            onClick={() => {
              GoToDefaultSorting();
            }}
          >
            <FaTimes />
          </div>
        </div>
      )}
    </div>
  );
};

export default SortMenu;
