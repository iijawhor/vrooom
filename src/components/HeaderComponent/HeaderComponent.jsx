import React, { useState } from "react";
import "./HeaderComponent.css";
import { Container, HeaderMenu } from "../Exports/exports";
function HeaderComponent() {
  const [toggleMenu, setToggleMenu] = useState(false);

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
          <div className="menu" onClick={() => setToggleMenu(!toggleMenu)}>
            =
          </div>
          {toggleMenu && <HeaderMenu />}
          <div className="headerAuthenticationOptionsLanguage">Language</div>
        </div>
      </div>
    </Container>
  );
}

export default HeaderComponent;
