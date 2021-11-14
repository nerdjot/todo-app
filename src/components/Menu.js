import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/Menu.css';
import MenuItem from './MenuItem';

const Menu = ({ menuDetails }) => {
  const MenuItems = menuDetails.map((menuDetail) => {
    <MenuItem
      label={menuDetail.label}
      onClick={menuDetail.onClick}
      Icon={menuDetail.icon}
    />;
  });
  return (
    <div className="menu">
      <div className="menuTitle">Sort By</div>
      {MenuItems}
    </div>
  );
};

export default Menu;
