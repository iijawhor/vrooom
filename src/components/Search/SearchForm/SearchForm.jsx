import React, { useState, forwardRef, useMemo } from "react";

import "./SearchForm.css";
import "./SearchFormResponsive.css";
import { useDispatch } from "react-redux";
import {
  LocationSearchingIcon,
  InputComponent,
  carBookings,
  UseDebounce
} from "../../Exports/exports";
import {
  searchData,
  pickupLocation,
  dropLocation
} from "../../../store/searchSlice";
import { useNavigate } from "react-router-dom";
const SearchForm = forwardRef(({ placeholder, buttonTitle }, ref) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [enterDestination, setEnterDestination] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filterData = useMemo(() => {
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

  const fetchedData = () => {
    const filteredData = filterData;
    dispatch(searchData(filteredData));
    dispatch(pickupLocation(currentLocation));
    dispatch(dropLocation(enterDestination));
  };

  const debounce = UseDebounce(() => fetchedData(), 6000);
  const handleSearch = (e) => {
    e.preventDefault();
    debounce();
    if (currentLocation && enterDestination) {
      navigate("/search-page");
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSearch} className="searchForm" ref={ref}>
        <div className="searchComponentInputs">
          <div className="searchComponentInputBox">
            <div className="currentLocationDot dot" />
            <InputComponent
              placeholder="Current Location"
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
