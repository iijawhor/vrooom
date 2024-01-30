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
    <Container className="footerContainer">
      <div className="footer">
        <div className="footerItems">
          <div className="footerLogo">
            {/* <h1>Vrooom</h1> */}
            <ul className="footerSocialConnect">
              <li>
                <XIcon
                  className="footerSocialLink"
                  style={{ fontSize: "22px", color: "darkgray" }}
                />
              </li>
              <li>
                <LinkedInIcon
                  className="footerSocialLink"
                  style={{ fontSize: "22px", color: "darkgray" }}
                />
              </li>
              <li>
                <InstagramIcon
                  className="footerSocialLink"
                  style={{ fontSize: "22px", color: "darkgray" }}
                />
              </li>
            </ul>
            <p className="hashtag">#VrooomForWeb</p>
          </div>
        </div>
        {/*  <div className="footerLogo"> */}
        <div className="footerItemLists">
          <ul className="footerItems">
            <li className="footerItem">Book a cab</li>
            <li className="footerItem">Drive with us</li>
            <li className="footerItem">Outstation</li>
            <li className="footerItem">Rental</li>
            <li className="footerItem">Vrooom Money</li>
            <li className="footerItem">Corporate</li>
          </ul>
          <ul className="footerItems">
            <li className="footerItem">Book a cab</li>
            <li className="footerItem">Drive with us</li>
            <li className="footerItem">Outstation</li>
            <li className="footerItem">Rental</li>
            <li className="footerItem">Vrooom Money</li>
            <li className="footerItem">Corporate</li>
          </ul>
        </div>
        <div className="footerNewsletter">
          <ul className="footerItems">
            <li className="footerItem">About Us</li>
            <li className="footerItem">Contact Us</li>
            <li className="footerItem">Support </li>
            <li className="footerItem">Careers</li>
            <li className="footerItem">Media Centre</li>
          </ul>
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
        </div>
      </div>
    </Container>
  );
}

export default FooterComponent;
