import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/ContextMenu.css';
import MenuItem from './MenuItem';

const ContextMenu = ({ menuDetails, style }) => {
  const MenuItems = menuDetails.map((menuDetail) => {
    return (
      <MenuItem
        key={menuDetail['id']}
        label={menuDetail['label']}
        onClick={menuDetail.onClick}
        Icon={menuDetail.icon}
        className="cmenu-item"
      />
    );
  });
  return (
    <div className="cmenu" style={style}>
      {MenuItems}
    </div>
  );
};

export default ContextMenu;
