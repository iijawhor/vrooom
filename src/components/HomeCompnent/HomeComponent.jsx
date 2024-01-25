import React from "react";
import "./HomeComponent.css";
import {
  SearchAndInfo,
  HomeBackground,
  Container,
  FeaturesDisplay,
  AskedQuestion,
  FooterComponent,
  HowItWorks,
  UserFlowPanel
} from "../../components/Exports/exports";
import HowItWorksPage from "../../pages/HowItWorksPage/HowItWorksPage";
function HomeComponent() {
  return (
    <Container className="homeComponent">
      <HomeBackground />
      <SearchAndInfo />
      <HowItWorksPage />
      <FeaturesDisplay />
      <HowItWorks />
      <AskedQuestion />
      <FooterComponent />
    </Container>
  );
}

export default HomeComponent;
