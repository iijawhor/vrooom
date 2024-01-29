import React from "react";
import { useSelector } from "react-redux";

function SearchResultCard() {
  const searchResults = useSelector((state) => state.search.searchResult);
  return (
    <div>
      {searchResults.map((searchResult) => {
        return searchResult.availableVehicles.map((availableVehicles) => (
          <div
            key={Date.now() + Math.random() * 5}
            className="searchResultCard"
            style={{
              marginBottom: "10px",
              textAlign: "start",
              display: "flex",
              position: "relative",
              padding: " 10px 0px",
              fontFamily: "sans-serif",
              fontSize: "14px",
              gap: "15px",
              letterSpacing: ".5px",
              borderBottom: "1px solid darkgray",
              alignItems: "center",
              width: "100%"
            }}
          >
            <div
              className="vehicleImage"
              style={{
                fontSize: "10px",
                color: "gray",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "5px"
                // minWidth: "90px"
              }}
            >
              {/* <h3
                style={{
                  fontSize: "14px",
                  letterSpacing: "1px",
                  fontFamily: "system-ui"
                }}
              >
                {availableVehicles.type}
              </h3> */}
              <img
                src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="cars"
                style={{
                  width: "50px",
                  height: "30px",
                  objectFit: "contain",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
              <span>{availableVehicles.time}</span>
            </div>

            <div
              className="vehicleDesrciption"
              style={{
                width: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "5px"
              }}
            >
              <h3
                style={{
                  fontSize: "14px",
                  letterSpacing: "1px",
                  fontFamily: "system-ui"
                }}
              >
                {availableVehicles.type}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: "400",
                  letterSpacing: ".5px"
                }}
              >
                {availableVehicles.description}
              </p>
            </div>
          </div>
        ));
      })}
    </div>
  );
}

export default SearchResultCard;
