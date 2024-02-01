import React, { Suspense, lazy } from "react";
import "./SearchResults.css";
import "./SearchResultsResponsive.css";
import {
  Container,
  InputComponent,
  SearchNavigationRoute,
  LoadingComponent
} from "../Exports/exports";
import { useSelector } from "react-redux";

const SearchResultCard = lazy(() =>
  import("../SearchResultCard/SearchResultCard")
);
function SearchResults() {
  const pickupLocation = useSelector((state) => state.search.pickupLocation);
  const dropLocation = useSelector((state) => state.search.dropLocation);
  const searchResults = useSelector((state) => state.search.searchResult);
  return (
    <Container className="SearchResultsContainer">
      <div className="SearchResultsserchDetails">
        <div className="SearchResultsserchDetailsHeader">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          magni.
          <div className="searchReultPageNavigationContainer">
            <SearchNavigationRoute className="searchReultPageNavigation" />
          </div>
        </div>
        <div className="SearchResultsserchDetailsInputs">
          <div className="SearchResultsserchDetailsInputContainer">
            <span>From</span>
            <InputComponent
              className="SearchResultsserchDetailsInput"
              disabled="disabled"
              value={pickupLocation}
            />
          </div>
          <div className="SearchResultsserchDetailsInputContainer">
            <span>To</span>
            <InputComponent
              className="SearchResultsserchDetailsInput"
              disabled="disabled"
              value={dropLocation}
            />
          </div>
          <div className="SearchResultsserchDetailsInputContainer">
            <span>When</span>
            <InputComponent
              className="SearchResultsserchDetailsInput"
              type="Select"
            />
          </div>
        </div>
        <div className="SearchResultsserchDetailsAvailableRides">
          <h2 className="SearchResultsserchDetailsAvailableRidesTitle">
            Available Rides
          </h2>
          <div className="searchResults">
            <Suspense fallback={<LoadingComponent />}>
              {searchResults.map((searchResult) => {
                return searchResult.availableVehicles.map(
                  (availableVehicles) => (
                    <SearchResultCard availableVehicles={availableVehicles} />
                  )
                );
              })}
            </Suspense>
          </div>
          <p className="searchResultLinkToLoginPage">
            Please login to check exact price
          </p>
        </div>
      </div>
    </Container>
  );
}

export default SearchResults;
