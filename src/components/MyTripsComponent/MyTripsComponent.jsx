import React, { useState } from "react";
import "./MyTripsComponent.css";
import {
  Container,
  AccountCircleIcon,
  KeyboardArrowDownIcon
} from "../Exports/exports";
function MyTripsComponent() {
  const [bookedRides, setBookedRides] = useState(false);
  return (
    <Container className="MyTripsComponentContainer">
      <div className="myTripComponentHeader">
        <div className="MyTripsComponentHeaderLeft">
          <div className="MyTripsComponentHeaderLeftNavigations">
            <p className="MyTripsComponentHeaderLeftNavigationLink">Rides</p>
            <p className="MyTripsComponentHeaderLeftNavigationLink">Packages</p>
          </div>
        </div>
        <div className="MyTripsComponentHeaderRight">
          <KeyboardArrowDownIcon className="accountDropdownIcon" />
        </div>
      </div>
      <div className="MyTripsComponent">
        <div className="MyTripsComponentRidesDetails">
          <img
            className="MyTripsComponentRidesDetailsImage"
            src="https://media.istockphoto.com/id/1397393347/photo/passenger-talking-to-cab-driver-and-showing-her-the-smartphone.jpg?s=612x612&w=0&k=20&c=knYylZQ2s2O67ftJuh3Z-9Ti_jPrP2hgZvBPsu1TQr0="
            alt="Rides history page image"
          />
          <div
            className="MyTripsComponentRidesDetailContainer
        "
          >
            <div className="MyTripsComponentRidesDetailContainerTexts">
              {bookedRides ? (
                <p>Your Rides</p>
              ) : (
                <p>You have not take any rides yet, take your first ride</p>
              )}
            </div>
            <div className="MyTripsComponentRides">
              {!bookedRides ? (
                <button className="myTripsComponentBookNowButton">
                  Book Now
                </button>
              ) : (
                <div>Rides</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MyTripsComponent;
