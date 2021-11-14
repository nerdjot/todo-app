import React, { useState, useEffect } from 'react';
import {
  FaRegStar,
  FaRegCalendar,
  FaSortAlphaUp,
  FaRegCalendarPlus,
  FaRegCalendarTimes,
} from 'react-icons/fa';
import ButtonMenu from './ButtonMenu';

const SortMenu = () => {
  const SortMenuDetails = [
    {
      icon: <FaSortAlphaUp />,
      label: 'Alphabetically',
      onClick: () => {
        return true;
      },
    },
    {
      icon: <FaRegCalendarPlus />,
      label: 'Creation Date',
      onClick: () => {
        return true;
      },
    },
    {
      icon: <FaRegStar />,
      label: 'Importance',
      onClick: () => {
        return true;
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

  return (
    <div>
      <ButtonMenu menuDetails={SortMenuDetails} />
    </div>
  );
};

export default SortMenu;
