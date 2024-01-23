import React from "react";
import "./FooterComponent.css";
import {
  Container,
  InputComponent,
  XIcon,
  LinkedInIcon,
  InstagramIcon
} from "../Exports/exports";
function FooterComponent() {
  return (
    <Container className="footerComponent">
      <footer className="footer">
        <div className="footerItemsLogo">
          <h1>Vrooom</h1>
          <div className="footerSocial">
            <ul>
              <li>
                <XIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
            </ul>
          </div>
        </div>
        <div className="footerItems">
          <ul>
            <li className="footerItem">Book a cab</li>
            <li className="footerItem">Drive with us</li>
            <li className="footerItem">Outstation</li>
            <li className="footerItem">Rental</li>
            <li className="footerItem">Vrooom Money</li>
            <li className="footerItem">Corporate</li>
          </ul>
        </div>
        <div className="footerItems">
          <ul>
            {" "}
            <li className="footerItem">About Us</li>
            <li className="footerItem">Contact Us</li>
            <li className="footerItem">Support </li>
            <li className="footerItem">Careers</li>
            <li className="footerItem">Media Centre</li>
          </ul>
        </div>
        <div className="footerItemsNewsLetter">
          <p>Stay up to date</p>
          <InputComponent
            className="footerItemNewsletterInput"
            placeholder="Enter your email"
          />
          <button className="footerSubscribeButton">
            Subscribe to news letter
          </button>
        </div>
      </footer>
    </Container>
  );
}

export default FooterComponent;
