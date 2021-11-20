import React, { useState, useEffect } from 'react';
import { FaPlus, FaRegCircle } from 'react-icons/fa';
import '../styles/AddComp.css';
const AddCompoenent = ({ data, setData, filterName }) => {
  let x = [1, 2, 3];
  const [inputText, setInputText] = useState('');
  const [inputInfoFocus, setInputInFocus] = useState(false);

  const handleAdd = () => {
    var newTodo = {
      id: Math.floor(Math.random() * 10000),
      value: inputText,
      isCompleted: false,
      isFavourite: filterName === 'Important' ? true : false,
      creationTime: new Date(Date.now()),
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
      <form className="add-comp-form">
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
          <input
            className="add-comp-btn"
            type="submit"
            value="ADD"
            onClick={() => {
              handleAdd();
            }}
          ></input>
        )}
      </form>
    </div>
  );
};

export default AddCompoenent;
