import React from "react";
import { Container } from "../Exports/exports";
import { Outlet } from "react-router-dom";
import "./SearchResultComponent.css";
import "./SearchResultComponentResponsive.css";
function SearchResultComponent() {
  return (
    <Container className="searchResultComponentContainer">
      <div className="searchResultComponentContainerChildComponent">
        <Outlet />
      </div>
      <div className="searchResultComponentContainerBackground">
        <img
          className="SearchResultsContainerBackgroundImage"
          src="https://www.brannoncanhelp.com/wp-content/uploads/2022/08/Vehicle-and-Driver-Requirements-for-Uber-and-Lyft-in-Florida.jpg"
          alt=""
        />
        <div className="SearchResultsContainerBackgroundDescription">
          <h1>Everyday City Commute.</h1>
          <p className="SearchResultsContainerBackgroundDescriptionText">
            Affordable A C cab rides at <br /> your door step.
          </p>
          <p className="vroomForWeb">#VrooomForWeb.</p>
        </div>
      </div>
    </Container>
  );
}

export default SearchResultComponent;
