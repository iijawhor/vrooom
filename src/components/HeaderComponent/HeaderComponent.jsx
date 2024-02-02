import React, { useState } from "react";
import "./HeaderComponent.css";
import {
  Container,
  HeaderMenu,
  AccountCircleIcon,
  KeyboardArrowDownIcon
} from "../Exports/exports";
import { useNavigate } from "react-router-dom";
function HeaderComponent() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <Container className="headerComponent">
      <div className="headerComponentContainer">
        <div className="headerItemContainer">
          <div className="logo">Vrooom</div>
          <div className="headerItems">
            <ul className="headerItemLists">
              <li className="headerItem">Service</li>
              <li className="headerItem">Partners</li>
              <li className="headerItem">Vrooom Plus</li>
              <li className="headerItem">About Us</li>
            </ul>
          </div>
        </div>

        <div className="headerAuthenticationOptions">
          <div className="headerAuthenticationOptionAuth">Sign In</div>
          {toggleMenu && <HeaderMenu />}
          <div className="headerAuthenticationOptionsLanguage">Language</div>
          <AccountCircleIcon
            className="accountCircleIcon"
            onClick={() => navigate("/user-account")}
          />
          <KeyboardArrowDownIcon
            className="menu"
            onClick={() => setToggleMenu(!toggleMenu)}
            style={{ fontSize: "30px" }}
          />
        </div>
      </div>
    </Container>
  );
}

export default HeaderComponent;
