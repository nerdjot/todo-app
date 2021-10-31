import React, { useState, useEffect } from "react";
import "../styles/Body.css";
import List from "./List";
const Body = () => {
  return (
    <div className="body-div">
      <div className="side-bar">SideBar</div>
      <List></List>
    </div>
  );
};

export default Body;
