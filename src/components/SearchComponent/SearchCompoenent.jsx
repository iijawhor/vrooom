import React from "react";
import "./SearchCompoenent.css";
import {
  Container,
  DailySearch,
  SearchNavigationRoute
} from "../Exports/exports";
import { Outlet } from "react-router-dom";
function SearchCompoenent() {
  return (
    <Container className="searchComponent">
      <SearchNavigationRoute />
      <div className="searchComponentFormContainer">
        <Outlet />
      </div>
    </Container>
  );
}

export default SearchCompoenent;
