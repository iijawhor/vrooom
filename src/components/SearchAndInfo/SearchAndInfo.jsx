import React from "react";
import "./SearchAndInfo.css";
import {
  Container,
  SearchCompoenent,
  GlobalConnectCities
} from "../Exports/exports";

function SearchAndInfo() {
  console.log("Rendering search Component............");
  return (
    <Container className="searchAndInfo">
      <SearchCompoenent />
      <div className="searchInfoContainer">
        <div className="xyz"></div>
        <GlobalConnectCities />
      </div>
    </Container>
  );
}

export default SearchAndInfo;
