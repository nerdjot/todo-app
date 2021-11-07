import React, { useState, useEffect } from 'react';
import {
  FaCheckCircle,
  FaRegCheckCircle,
  FaRegCircle,
  FaStar,
  FaRegStar,
} from 'react-icons/fa';

const UnCompletedItem = () => {
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
        {isHovered ? <FaRegCheckCircle /> : <FaRegCircle />}
      </div>
      <div className="internal-internal">Bring groceries from dealership</div>
      <div className="star">
        <FaRegStar />
      </div>
    </div>
  );
};

export default UnCompletedItem;
