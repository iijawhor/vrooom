import React from "react";
import "./GlobalConnectCities.css";
import "./GlobalConnectCitiesResponsive.css";
import { Card } from "../Exports/exports";
function GlobaConnectCities() {
  return (
    <div className="globaConnectCities">
      <h1 className="globaConnectCitiesTitle">
        Global mobility ecosystem driving communities forward
      </h1>
      <div className="globalCitiesCardContainer">
        <Card
          className="globaConnectCitiesCard"
          imgClass="GlobaConnectCitiesCardImg"
          globaConnectCitiesCardDetails="globaConnectCitiesCardDetails"
          img="https://cdn-icons-png.flaticon.com/512/2451/2451474.png"
          cities="250+"
          title="Cities Covered"
          globalConnectCitiesCardResponsive="globalConnectCitiesCardResponsive"
          description="Across India, Australia, New Zealand and the UK"
        />
        <Card
          className="globaConnectCitiesCard"
          globaConnectCitiesCardDetails="globaConnectCitiesCardDetails"
          imgClass="GlobaConnectCitiesCardImg"
          title="Yearly Rides"
          globalConnectCitiesCardResponsive="globalConnectCitiesCardResponsive"
          cities="55cr"
          description="Booked by our customers every year"
          img="https://static.thenounproject.com/png/2205388-200.png"
          responsiveImage="globaConnectCitiesCardResponsiveImage"
        />
        <Card
          className="globaConnectCitiesCard"
          globaConnectCitiesCardDetails="globaConnectCitiesCardDetails"
          globalConnectCitiesCardResponsive="globalConnectCitiesCardResponsive"
          imgClass="GlobaConnectCitiesCardImg"
          title="Kilometeres"
          description="Distance covered on Ola S1 scooters within a year of launch"
          cities="12cr"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Lightning_bolt_inside_green_circle.svg/280px-Lightning_bolt_inside_green_circle.svg.png"
        />
      </div>
    </div>
  );
}

export default GlobaConnectCities;
