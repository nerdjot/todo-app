import React, { useState, useEffect } from 'react';
import {
  FaPlus,
} from 'react-icons/fa';
const AddCompoenent = () => {
  return (
    <div className="add-comp">
      <div className="add-comp-icon"><FaPlus /></div>
      <input className="add-comp-input"
      placeholder="Add a task"></input>
    </div>
  );
};

export default AddCompoenent;
