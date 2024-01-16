import React from "react";
import "./SearchAndInfo.css";
import { Container, Sear, SearchCompoenent } from "../Exports/exports";

function SearchAndInfo() {
  console.log("Rendering search Component............");
  return (
    <Container className="searchAndInfo">
      <SearchCompoenent />
    </Container>
  );
}

export default SearchAndInfo;
