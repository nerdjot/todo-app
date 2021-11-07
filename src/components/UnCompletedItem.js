import React, { useState, useEffect } from 'react';
import {
  FaCheckCircle,
  FaRegCheckCircle,
  FaRegCircle,
  FaStar,
  FaRegStar,
} from 'react-icons/fa';

const UnCompletedItem = ({
  id,
  value,
  isFavourite,
  data,
  setData,
  toggleFavourite,
  toggleCompleted,
}) => {
  const [isHovered, setIsHover] = useState(false);

  return (
    <div className="un-completed-item">
      <div
        className="check-icons"
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onClick={() => {
          toggleCompleted(id);
        }}
      >
        {isHovered ? <FaRegCheckCircle /> : <FaRegCircle />}
      </div>
      <div className="internal-internal">{value}</div>
      <div
        className="star"
        onClick={() => {
          toggleFavourite(id);
        }}
      >
        {isFavourite ? <FaStar /> : <FaRegStar />}
      </div>
    </div>
  );
};

export default UnCompletedItem;
