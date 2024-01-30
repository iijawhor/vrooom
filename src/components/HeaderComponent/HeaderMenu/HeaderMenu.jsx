import React from "react";
import "./HeaderMenu.css";
function HeaderMenu() {
  return (
    <div className="headerMenu">
      <ul className="headerMenuLists">
        <li className="headerMenuItem">Service</li>
        <li className="headerMenuItem">Partners</li>
        <li className="headerMenuItem">Vrooom Plus</li>
        <li className="headerMenuItem">About Us</li>
        <li className="headerMenuItem social-connect">Linked In</li>
        <li className="headerMenuItem social-connect">GitHub</li>
      </ul>
      <div className="headerMenuBottom">
        <span>#VrooomForWeb</span>
      </div>
    </div>
  );
}

export default HeaderMenu;
