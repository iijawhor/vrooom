import React from "react";
import "./UserAccountInfo.css";
import { Container, AccountCircleIcon } from "../../Exports/exports";
function UserAccountInfo() {
  return (
    <Container>
      <div className="userAccountInfoHeader">
        <h2>User Account Info</h2>
        <AccountCircleIcon className="userAccountInfoHeaderAccountCircle" />
      </div>
      <div className="userAccountInfoBasicInfo">
        <div className="userAccountInfoBasicInfoName">
          <span className="userAccountInfoBasicInfoSpan">Name</span>
          <p className="userAccountBasicInformation">Jawhor Ali Khan</p>
        </div>
        <div className="userAccountInfoBasicInfoMobile">
          <span className="userAccountInfoBasicInfoSpan">Mobile</span>
          <p className="userAccountBasicInformation">8145244733</p>
        </div>
        <div className="userAccountInfoBasicInfoEmail">
          <span className="userAccountInfoBasicInfoSpan">Email</span>
          <p className="userAccountBasicInformation">jawhorali1@gmail.com</p>
        </div>
      </div>
    </Container>
  );
}

export default UserAccountInfo;
