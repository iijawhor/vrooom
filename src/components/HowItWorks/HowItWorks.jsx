import React from "react";
import "./HowItWorks.css";
import { Container, HowItWorksCard } from "..//Exports/exports";
function HowItWorks() {
  return (
    <Container className="howItWorks">
      <div className="howItWorksContainer">
        <HowItWorksCard
          img="https://upload-cdn.careem.com/icon_3_a9a66a0fc3.png"
          title="Choose your ride"
          description="Select from a wide range of options and get your ride within minutes, or schedule one for later."
        />
        <HowItWorksCard
          img="https://upload-cdn.careem.com/icon_2_61168d4d4f.png"
          title="Track your ride"
          description="Track your ride in real time from the moment a Captain is assigned until you arrive at your destination."
        />
        <HowItWorksCard
          img="https://upload-cdn.careem.com/icon_1_0d1b81d8e7.png"
          title="Pay securely"
          description="Card, Vrooom Pay, Apple Pay or cash; you can pay securely on Vrooom."
        />
      </div>
    </Container>
  );
}

export default HowItWorks;
