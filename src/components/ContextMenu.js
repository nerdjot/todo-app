import React, { useState, useEffect, useRef } from 'react';
import { FaSort } from 'react-icons/fa';
import '../styles/Navbar.css';
import Menu from './Menu';

const ContextMenu = ({
  menuDetails,
  shouldHideMenu,
  shouldShowContextMenu,
  setShouldShowContextMenu,
}) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        shouldShowContextMenu &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setShouldShowContextMenu(false);
      }
    };
    const preventDefaultContextMenu = (e) => {
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
      <div id="btn" className="btnMenu" ref={ref}>
        <div
          className="sort-btn"
          onContextMenu={() => {
            setShouldShowContextMenu((oldState) => !oldState);
          }}
        >
          <FaSort />
          <div className="btn-menu-btn-label">Context Menu</div>
        </div>
        {shouldShowContextMenu ? (
          <Menu menuDetails={menuDetails}></Menu>
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
};

export default ContextMenu;
