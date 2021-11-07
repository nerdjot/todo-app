import React, { useState, useEffect } from 'react';
import {
  FaCheckCircle,
  FaRegCheckCircle,
  FaRegCircle,
  FaStar,
  FaRegStar,
} from 'react-icons/fa';

const CompletedItem = () => {
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
      >
        <FaCheckCircle />
      </div>
      <div className="internal-internal">Eat a banana</div>
      <div className="star">
        <FaRegStar />
      </div>
    </div>
  );
};

export default CompletedItem;
