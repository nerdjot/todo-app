import React, { useState, useEffect, useRef } from 'react';
import { FaSort } from 'react-icons/fa';
import '../styles/Navbar.css';
import Menu from './Menu';

const ButtonMenu = () => {
  const [shouldShowSortMenu, setShouldShowSortMenu] = useState(true);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        shouldShowSortMenu &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setShouldShowSortMenu(false);
      }
    };
  }, [shouldShowSortMenu]);

  return (
    <div id="btn" className="btnMenu" ref={ref}>
      <div
        className="sort-btn"
        onClick={() => {
          setShouldShowSortMenu((oldState) => !oldState);
        }}
        onBlur={() => {
          setShouldShowSortMenu(false);
        }}
      >
        <FaSort />
        <div>Sort</div>
        {shouldShowSortMenu ? <Menu /> : <> </>}
      </div>
    </div>
  );
};

export default ButtonMenu;
