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

const ListActual = () => {
  const [isHovered, setIsHover] = useState(false);
  const toggleHover = () => {
    setIsHover(!isHovered);
  };

  return (
    <div className="list-actual">
      <UnCompletedItem />
      <UnCompletedItem />
      <UnCompletedItem />
      <UnCompletedItem />
      <details>
        <summary>
          <div className="summary">Completed</div>
        </summary>
        <CompletedItem />
        <CompletedItem />
      </details>
    </div>
  );
};

export default ListActual;
