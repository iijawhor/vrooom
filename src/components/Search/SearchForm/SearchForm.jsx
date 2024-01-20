import React, { useState, forwardRef, useEffect, useMemo } from "react";

import "./SearchForm.css";
import "./SearchFormResponsive.css";
import { useDispatch, useSelector } from "react-redux";
import {
  LocationSearchingIcon,
  InputComponent,
  carBookings,
  UseDebounce
} from "../../Exports/exports";
import { searchData } from "../../../store/searchSlice";
const SearchForm = forwardRef(({ placeholder, buttonTitle }, ref) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [enterDestination, setEnterDestination] = useState("");
  const [searchDatas, setSearchDatas] = useState([]);
  const dispatch = useDispatch();
  const debounce = UseDebounce({ currentLocation, enterDestination }, 200);
  const filter = useMemo(() => {
    return carBookings.filter((data) => {
      const pickupLocation = data.currentLocation
        .toLowerCase()
        .includes(currentLocation.toLowerCase());
      const dropLocation = data.destination
        .toLowerCase()
        .includes(enterDestination.toLowerCase());
      return pickupLocation && dropLocation;
    });
  }, [currentLocation, enterDestination]);

  // useEffect(() => {
  //   if (currentLocation && enterDestination) {
  //     setSearchResult(filter);
  //   } else {
  //     setSearchResult([]);
  //   }
  // }, [currentLocation, enterDestination, filter]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!currentLocation && !enterDestination) {
      alert("Please enter something");
      return;
    } else if (
      (!currentLocation && enterDestination) ||
      (currentLocation && !enterDestination)
    ) {
      alert("Please enter query");
      return;
    }
    setSearchDatas(filter);
    dispatch(searchData(filter));
  };

  return (
    <>
      <form action="" onSubmit={handleSearch} className="searchForm" ref={ref}>
        <div className="searchComponentInputs">
          <div className="searchComponentInputBox">
            <div className="currentLocationDot dot" />
            <InputComponent
              placeholder="Current Location"
              onClick={handleSearch}
              onChange={(e) => setCurrentLocation(e.target.value)}
              value={currentLocation}
              className="searchInput"
              required="required"
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
              required="required"
            />
          </div>
        </div>
        {/* <div className="searchComponentInputs"> */}
        <button type="submit" className="searchCabs">
          {buttonTitle}
        </button>
      </form>
    </>
  );
});

export default SearchForm;
