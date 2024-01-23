import React from "react";
import "./SearchNavigationRoute.css";
import { Link } from "react-router-dom";
function SearchNavigationRoute({ className }) {
  const searchNavigation = [
    { name: "Daily", slug: "/search/daily-search", id: 1 },
    { name: "Rental", slug: "/search/rental-search", id: 2 },
    { name: "Outstation", slug: "/search/outstation-search", id: 3 }
  ];
  return (
    <div className={`searchComponentNavigation ${className}`}>
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
  );
}

export default SearchNavigationRoute;
