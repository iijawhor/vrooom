import React from "react";
import "./SearchCompoenent.css";
import "./SearchCompoenentResponsive.css";
import { Container, SearchNavigationRoute } from "../Exports/exports";
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
