import React from "react";
import "./ContinueCabBooking.css";
import { useSelector } from "react-redux";
import { ContinueCabBookingHeader } from "../Exports/exports";
const ContinueCabBooking = () => {
  const pickupLocation = useSelector((state) => state.search.pickupLocation);
  const dropLocation = useSelector((state) => state.search.dropLocation);
  const rideFare = useSelector((state) => state.search.rideFare);
  const couponCode = useSelector((state) => state.search.coupon);

  return (
    <div className="continueCabBooking">
      <div className="continueBookingHeader">
        <ContinueCabBookingHeader />
      </div>
      <div className="continueBookingLocationContainer">
        <div className="continueBookingMap">
          <img
            className="continueBookingMapImage"
            src="https://i.pinimg.com/originals/f9/93/03/f9930313a1d18db25384431f240006e7.gif"
            alt="Indian Map"
          />
        </div>
        <div className="continueBookingLocations">
          <div className="continueBookingPickupLocation location">
            <span>Pickup</span>
            <p className="continueCabBookingLocation">{pickupLocation}</p>
          </div>
          <div className="continueBookingDropLocation location">
            <span>Drop</span>
            <p className="continueCabBookingLocation"> {dropLocation}</p>
          </div>
          <div className="continueBookingDropLocation location">
            <span>Fare :</span>
            <p className="rideFare">{rideFare}</p> Rs.
          </div>
        </div>
      </div>
      {/* <div className="continueBookingLocationContainer"> */}

      <div className="continueBookingFareDetailsAndDiscounts">
        <div className="continueBookingFareDetailsAndDiscountsDetails location">
          <span>Pay By :</span>
          <p className="payBy">Vrooom Pay</p>
        </div>
        <div className="continueBookingFareDetailsAndDiscountsDetails location">
          <span>Coupon :</span>
          <p className="coupon">{couponCode}</p>
        </div>
      </div>
      <div className="continueCabBookingButton">
        <button>Confirm & Book</button>
      </div>
    </div>
  );
};

export default ContinueCabBooking;
