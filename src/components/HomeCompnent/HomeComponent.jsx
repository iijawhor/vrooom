import React from "react";
import "./HomeComponent.css";
import {
  SearchAndInfo,
  HomeBackground,
  Container,
  FeaturesDisplay,
  AskedQuestion,
  FooterComponent,
  HowItWorks
} from "../../components/Exports/exports";
function HomeComponent() {
  return (
    <Container className="homeComponent">
      <HomeBackground />
      <SearchAndInfo />
      <FeaturesDisplay />
      <HowItWorks />
      <AskedQuestion />
      <FooterComponent />
    </Container>
  );
}

export default HomeComponent;
