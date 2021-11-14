import React, { useState, useEffect } from 'react';
import { FaRegStar, FaRegCalendar, FaSortAlphaUp } from 'react-icons/fa';
import ButtonMenu from './ButtonMenu';

const SortMenu = () => {
  const SortMenuDetails = [
    {
      icon: <FaCheckCircle />,
      label: 'Alphabetically',
      onClick: () => {
        return true;
      },
    },
    {
      icon: <FaRegCalendar />,
      label: 'Creation Date',
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
