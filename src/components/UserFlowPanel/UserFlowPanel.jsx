import React from "react";
import "./UserFlowPanel.css";
import { Container, HowItWorksCard } from "../Exports/exports";
function UserFlowPanel() {
  return (
    <Container className="userFlowPanelContainer">
      <div className="userFlowPanel">
        <h1 className="userFlowPanelTitle">What's in it for you</h1>
        <hr className="userFlowPanelLine" />
        <div className="UserFlowPanelNavigation">
          <button className="userFlowPanelNavigationButton customerNavigationButton">
            Customers
          </button>
          <button className="userFlowPanelNavigationButton captainNavigationButton">
            Captains
          </button>
        </div>
        <div className="userFlowPanedCards">
          <HowItWorksCard
            className="userFlowPanelCard"
            img="https://images.livemint.com/img/2021/11/05/1600x900/Capture_1636109897108_1636109910536.JPG"
            title="Doorstep Pick-Up"
            description="We will pick you up from where you are 
            and drop you exactly where you need to be."
            descriptionClass="userFlowDescriptionClass"
            cardImageClass="userFlowPanedCardImg"
          />
          <HowItWorksCard
            className="userFlowPanelCard"
            img="https://images.livemint.com/img/2021/11/05/1600x900/Capture_1636109897108_1636109910536.JPG"
            title="Affordability"
            description="No more latent prices and shocked reactions after seeing 
            the final ride cost. Wer'e here with the 
            most affordable rides for all"
            descriptionClass="userFlowDescriptionClass"
            cardImageClass="userFlowPanedCardImg"
          />
          <HowItWorksCard
            className="userFlowPanelCard"
            cardImageClass="userFlowPanedCardImg"
            img="https://images.livemint.com/img/2021/11/05/1600x900/Capture_1636109897108_1636109910536.JPG"
            title="Quick Ride
"
            description="Trend setters of smart commute be it traffic or rush hours."
            descriptionClass="userFlowDescriptionClass"
          />
        </div>
      </div>
    </Container>
  );
}

export default UserFlowPanel;
