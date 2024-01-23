import React from "react";
import "./FeatureDisplayCard.css";
function FeatureDisplayCard() {
  return (
    <div className="featureDisplayCardContainer">
      <div className="featureDisplayCardImageBox">
        <video
          src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/for-drivers.mp4"
          className="featureDisplayCardImageBoxImage"
          autoPlay
          muted
        ></video>
      </div>
      <div className="featureDisplayCardDetails">
        <div className="features">
          <hr className="featuresLine One" />
          <h1>For Riders</h1>
          <p>
            We constantly experiment to come up with industry-first features for
            our riders that eventually become a norm.
          </p>
        </div>
        <div className="features">
          <hr className="featuresLine Two" />
          <h1> For Drivers</h1>
          <p>
            For Drivers Our drivers get real time stats to help optimize their
            rides better and earn more, straight from the app.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureDisplayCard;
