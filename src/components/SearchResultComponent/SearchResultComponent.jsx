import React, { Suspense, lazy } from "react";
import "./SearchResultComponent.css";
import "./SearchResultComponentResponsive.css";
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
function SearchResultComponent() {
  const pickupLocation = useSelector((state) => state.search.pickupLocation);
  const dropLocation = useSelector((state) => state.search.dropLocation);
  return (
    <Container className="searchResultComponentContainer">
      <div className="searchResultComponentserchDetails">
        <div className="searchResultComponentserchDetailsHeader">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          magni.
          <div className="searchReultPageNavigationContainer">
            <SearchNavigationRoute className="searchReultPageNavigation" />
          </div>
        </div>
        <div className="searchResultComponentserchDetailsInputs">
          <div className="searchResultComponentserchDetailsInputContainer">
            <span>From</span>
            <InputComponent
              className="searchResultComponentserchDetailsInput"
              disabled="disabled"
              value={pickupLocation}
            />
          </div>
          <div className="searchResultComponentserchDetailsInputContainer">
            <span>To</span>
            <InputComponent
              className="searchResultComponentserchDetailsInput"
              disabled="disabled"
              value={dropLocation}
            />
          </div>
          <div className="searchResultComponentserchDetailsInputContainer">
            <span>When</span>
            <InputComponent
              className="searchResultComponentserchDetailsInput"
              type="Select"
            />
          </div>
        </div>
        <div className="searchResultComponentserchDetailsAvailableRides">
          <h2 className="searchResultComponentserchDetailsAvailableRidesTitle">
            Available Rides
          </h2>
          <div className="searchResults">
            <Suspense fallback={<LoadingComponent />}>
              <SearchResultCard />
            </Suspense>
          </div>
          <p className="searchResultLinkToLoginPage">
            Please login to check exact price
          </p>
        </div>
      </div>
      <div className="searchResultComponentContainerBackground">
        <img
          className="searchResultComponentContainerBackgroundImage"
          src="https://www.brannoncanhelp.com/wp-content/uploads/2022/08/Vehicle-and-Driver-Requirements-for-Uber-and-Lyft-in-Florida.jpg"
          alt=""
        />
        <div className="searchResultComponentContainerBackgroundDescription">
          <h1>Everyday City Commute.</h1>
          <p className="searchResultComponentContainerBackgroundDescriptionText">
            Affordable A C cab rides at <br /> your door step.
          </p>
          <p className="vroomForWeb">#VrooomForWeb.</p>
        </div>
      </div>
    </Container>
  );
}

export default SearchResultComponent;
