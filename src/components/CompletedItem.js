import React, { useState, useEffect, useRef } from 'react';
import {
  FaCheckCircle,
  FaRegCheckCircle,
  FaRegCircle,
  FaStar,
  FaRegStar,
  FaRegTrashAlt,
} from 'react-icons/fa';
import ContextMenu from './ContextMenu';

const CompletedItem = ({
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
  const ContextMenuDetails = [
    {
      icon: <FaCheckCircle />,
      label: 'Mark as Uncompleted',
      onClick: () => {
        toggleCompleted(id);
        setShouldShowContextMenu(false);
      },
    },
    {
      icon: isFavourite ? <FaRegStar /> : <FaStar />,
      label: isFavourite ? 'Remove importance' : 'Mark as Important',
      onClick: () => {
        toggleFavourite(id);
        setShouldShowContextMenu(false);
      },
    },
    {
      icon: <FaRegTrashAlt style={{ color: 'red' }} />,
      label: 'Delete task',
      onClick: () => {
        setShouldShowContextMenu(false);
      },
    },
  ];

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      // setMousePos([e.clientX + 'px', e.clientY + 'px']);
      if (
        shouldShowContextMenu &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setShouldShowContextMenu(false);
      }
    };
    const preventDefaultContextMenu = (e) => {
      // setMousePos([e.clientX + 'px', e.clientY + 'px']);
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
    <div>
      <div
        className="un-completed-item"
        onContextMenu={(e) => {
          setMousePos([e.clientX + 'px', e.clientY + 'px']);
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
          <FaCheckCircle />
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
          <ContextMenu
            menuDetails={ContextMenuDetails}
            style={{
              left: mousePos[0],
              top: mousePos[1],
              position: 'fixed',
            }}
          ></ContextMenu>
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
};

export default CompletedItem;
