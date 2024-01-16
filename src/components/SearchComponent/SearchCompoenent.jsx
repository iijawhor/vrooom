import React from "react";
import "./SearchCompoenent.css";
import {
  Container,
  SearchNavigationRoute,
  DailySearch,
  OutstationSearch
} from "../Exports/exports";
function SearchCompoenent() {
  return (
    <Container className="searchComponent">
      <SearchNavigationRoute />
      <div className="searchComponentFormContainer">
        <DailySearch />
        {/* <OutstationSearch /> */}
      </div>
    </Container>
  );
}

export default SearchCompoenent;
