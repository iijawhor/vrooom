import React from "react";
import {
  SearchAndInfo,
  HomeBackground,
  Container
} from "../../components/Exports/exports";
function HomeComponent() {
  return (
    <Container className="homeComponent">
      <HomeBackground />
      <SearchAndInfo />
    </Container>
  );
}

export default HomeComponent;
