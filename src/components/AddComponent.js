import React, { useState, useEffect } from 'react';
import { FaPlus, FaRegCircle } from 'react-icons/fa';
const AddCompoenent = ({ data, setData }) => {
  let x = [1, 2, 3];
  console.log(typeof x);
  const [inputText, setInputText] = useState('');
  const [inputInfoFocus, setInputInFocus] = useState(false);

  const handleAdd = () => {
    var newTodo = {
      id: data.length,
      value: inputText,
      isCompleted: false,
      isFavourite: false,
    };
    setInputText('');
    let copyData = [...data];
    copyData.push(newTodo);
    setData(copyData);
  };
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
      {inputText === '' ? (
        <></>
      ) : (
        <button
          className="add-comp-btn"
          onClick={() => {
            handleAdd();
          }}
        >
          ADD
        </button>
      )}
    </div>
  );
};

export default AddCompoenent;
