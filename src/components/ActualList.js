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

const ListActual = ({ data, setData }) => {
  const UnCompletedList = data.map((Item) =>
  {
    if(!Item['isCompleted'])
    {
      return <UnCompletedItem isFavourite={Item['isFavourite']} value={Item['value']} />
    }
  }
);
const CompletedList = data.map((Item) =>
  {
    if(Item['isCompleted'])
    {
      return <CompletedItem isFavourite={Item['isFavourite']} value={Item['value']} />
    }
  }
);
  return (
    <div className="list-actual">
      {UnCompletedList}
      <details>
        <summary>
          <div className="summary">Completed</div>
        </summary>
        {CompletedList}
      </details>
    </div>
  );
};

export default ListActual;
