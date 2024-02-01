import React from "react";
import "./ContinueCabBookingHeader.css";
import { useSelector } from "react-redux";
import { ArrowBackIcon } from "../../Exports/exports";
import { useNavigate } from "react-router-dom";
function ContinueCabBookingHeader() {
  const navigate = useNavigate();
  const cabType = useSelector((state) => state.search.cabType);
  return (
    <div className="continueCabBookingHeader">
      <div className="cabBookingHeaderBackIconContainer">
        <ArrowBackIcon
          className="continueCabBookingHeaderItem cabBookingHeaderBackIcon"
          onClick={() => navigate("/search-result-component")}
        />
      </div>
      <div className="cabbookingHeaderCabDetail">
        <p className="continueCabBookingHeaderItem">{cabType}</p>
      </div>
      <div className="cabbookingHeaderCabAuthentication">
        <p className="continueCabBookingHeaderItem continueCabBookingHeaderItemAuth">
          Sign In
        </p>
      </div>
    </div>
  );
}

export default ContinueCabBookingHeader;
