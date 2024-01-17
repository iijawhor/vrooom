import React, { useState, forwardRef } from "react";
import "./SearchForm.css";
import "./SearchFormResponsive.css";
import { LocationSearchingIcon, InputComponent } from "../../Exports/exports";

const SearchForm = forwardRef(({ placeholder, buttonTitle }, ref) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [enterDestination, setEnterDestination] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Button Clicked");
  };

  return (
    <>
      <form action="" className="searchForm" ref={ref}>
        <div className="searchComponentInputs">
          <div className="searchComponentInputBox">
            <div className="currentLocationDot dot" />
            <InputComponent
              placeholder="Current Location"
              onClick={handleSearch}
              onChange={(e) => setCurrentLocation(e.target.value)}
              value={currentLocation}
              className="searchInput"
            />
            <LocationSearchingIcon
              className="locationSearchingIcon"
              style={{ color: "grey", fontSize: "18px" }}
            />
          </div>
          <hr className="searchInputLine" />
          <div className="searchComponentInputBox">
            <div className="destinationDot dot" />
            <InputComponent
              placeholder={placeholder}
              onChange={(e) => setEnterDestination(e.target.value)}
              value={enterDestination}
              className="searchInput"
            />
          </div>
        </div>
        {/* <div className="searchComponentInputs"> */}
        <button onClick={handleSearch} className="searchCabs">
          {buttonTitle}
        </button>
      </form>
    </>
  );
});

export default SearchForm;
