import React, { useState, useEffect } from 'react';
import {
  FaCheckCircle,
  FaRegCheckCircle,
  FaRegCircle,
  FaStar,
  FaRegStar,
} from 'react-icons/fa';

const ListActual = () => {
  const [isHovered, setIsHover] = useState(false);
  const toggleHover = () => {
    setIsHover(!isHovered);
  };

  return (
    <div className="list-actual">
      <div className="internal">
        <div
          className="check-icons"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          {isHovered ? <FaRegCheckCircle /> : <FaRegCircle />}
        </div>
        <div className="internal-internal">in</div>
        <div className="star">
          <FaRegStar />
        </div>
      </div>
      <div className="internal">internal</div>
      <div className="internal">internal</div>
      <div className="internal">internal</div>
    </div>
  );
};

export default ListActual;
