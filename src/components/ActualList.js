import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

const ListActual = () => {
  return (
    <div className="list-actual">
      <div className="internal">
        <FaRegCircle />
        <div className="internal-internal">in</div>
      </div>
      <div className="internal">internal</div>
      <div className="internal">internal</div>
      <div className="internal">internal</div>
    </div>
  );
};

export default ListActual;


