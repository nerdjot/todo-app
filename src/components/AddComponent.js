import React, { useState, useEffect } from 'react';
import { FaPlus, FaRegCircle } from 'react-icons/fa';
const AddCompoenent = () => {
  const [inputText, setInputText] = useState('');
  const [inputInfoFocus, setInputInFocus] = useState(false);
  return (
    <div className="add-comp">
      <div className="add-comp-icon">
        {inputInfoFocus ? <FaRegCircle color="#6e6e6e" /> : <FaPlus />}
      </div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="add-comp-input"
        placeholder="Add a task"
        onFocus={() => {
          setInputInFocus(true);
        }}
        onBlur={() => {
          setInputInFocus(false);
        }}
      ></input>
      {inputText === '' ? <></> : <button className="add-comp-btn">ADD</button>}
    </div>
  );
};

export default AddCompoenent;
