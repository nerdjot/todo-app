import React, { useState, useEffect, useRef } from 'react';
import {
  FaCheckCircle,
  FaRegCheckCircle,
  FaRegCircle,
  FaStar,
  FaRegStar,
} from 'react-icons/fa';
import ContextMenu from './ContextMenu';
import Menu from './Menu';

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
  const [mousePos, setMousePos] = useState(['0px', '0px']);
  const [shouldShowContextMenu, setShouldShowContextMenu] = useState(false);
  const ref = useRef();
  const SortMenuDetails = [
    {
      icon: <FaRegCircle />,
      label: 'Alphabetically',
      onClick: () => {
        setSortBy('alphabetical order');
        setShouldShowSortMenu(false);
      },
    },
    {
      icon: <FaRegCircle />,
      label: 'Creation Date',
      onClick: () => {
        setSortBy('creation date');
        setShouldShowSortMenu(false);
      },
    },
    {
      icon: <FaRegCircle />,
      label: 'Importance',
      onClick: () => {
        setSortBy('importance');
        setShouldShowSortMenu(false);
      },
    },
    {
      icon: <FaRegCircle />,
      label: 'Due Date',
      onClick: () => {
        return true;
      },
    },
  ];

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      setMousePos([e.clientX + 'px', e.clientY + 'px']);
      if (
        shouldShowContextMenu &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setShouldShowContextMenu(false);
      }
    };
    const preventDefaultContextMenu = (e) => {
      setMousePos([e.clientX + 'px', e.clientY + 'px']);
      e.preventDefault();
    };

    document.addEventListener('mousedown', checkIfClickedOutside);
    document.addEventListener('contextmenu', preventDefaultContextMenu);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
      document.removeEventListener('contextmenu', preventDefaultContextMenu);
    };
  }, [shouldShowContextMenu]);

  return (
    <div
      className="un-completed-item"
      onContextMenu={() => {
        setShouldShowContextMenu((oldState) => !oldState);
      }}
      ref={ref}
    >
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
      {shouldShowContextMenu ? (
        <Menu
          menuDetails={SortMenuDetails}
          style={{
            left: mousePos[0],
            top: mousePos[1],
            position: 'fixed',
          }}
        ></Menu>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default UnCompletedItem;
