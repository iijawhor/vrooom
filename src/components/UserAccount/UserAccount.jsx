import React from "react";
import "./UserAccount.css";
import {
  Container,
  UserAccountInfo,
  HomeTwoToneIcon
} from "../Exports/exports";
import { Outlet, useNavigate } from "react-router-dom";
function UserAccount() {
  const userAccountRoutes = [
    {
      slug: "/user-account/user-account-info",
      tag: "Account Info",
      element: <UserAccountInfo />
    },
    {
      slug: "/user-account/my-trips",
      tag: "My Trips",
      element: <p>MyTrips</p>
    },
    {
      slug: "/user-account/user-account-security",
      tag: "Security",
      element: <p>Seacurity</p>
    },
    {
      slug: "/user-account/user-account-data-access",
      tag: "Data Access",
      element: <p>Data Access</p>
    }
  ];
  const navigate = useNavigate();
  return (
    <Container className="userAccount">
      <header>
        <div className="userAccountLogo">Vrooom Account</div>
        <HomeTwoToneIcon
          className="backToHomeIcon"
          onClick={() => navigate("/")}
        />
      </header>
      <div className="userAccountDetailsContainer">
        <div className="userAccountDetailsContainerBars">
          <div className="userAccountNavigations">
            {userAccountRoutes.map((userAccountRoute) => (
              <button
                onClick={() => navigate(userAccountRoute.slug)}
                className="userAccountNavigationButton"
              >
                {userAccountRoute.tag}
              </button>
            ))}
          </div>
        </div>
        {/* <div className="userAccountNavigations"> */}
        <div className="userAccountDetailsContainerNaviagtePages">
          <div className="userAccountDetailsContainerNaviagtePage">
            <Outlet />
          </div>
        </div>
        {/* <div className="userAccountNavigationsPages"> */}
      </div>
      {/*       <div className="userAccountDetailsContainer"> */}
    </Container>
  );
}

export default UserAccount;
