import React from "react";
import "./DisplayMessage.css";
function DisplayMessage({ displayMessage }) {
  return (
    <div className="errorMessage">
      <h1 className="errorMessageText"> {displayMessage}</h1>
    </div>
  );
}

export default DisplayMessage;
