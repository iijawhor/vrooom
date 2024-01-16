import React from "react";
import "./SearchNavigationRoute.css";
import { Link } from "react-router-dom";
function SearchNavigationRoute() {
  const searchNavigation = [
    { name: "Daily", slug: "/daily-search", id: 1 },
    { name: "Rental", slug: "/rental-search", id: 3 },
    { name: "Outstation", slug: "/outstation-search", id: 3 }
  ];
  return (
    <div className="searchComponentNavigation">
      <ul className="searchComponentNavigationItems">
        {searchNavigation.map((searchRoute) => (
          <li key={searchRoute.id} className="searchComponentNavigationItem">
            <Link to={searchRoute.slug}>
              <button className="searchNavigationRouteButton">
                {searchRoute.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    /*   <div className="searchComponentNavigation"> */
  );
}

export default SearchNavigationRoute;
