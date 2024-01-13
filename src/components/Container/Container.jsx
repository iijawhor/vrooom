import React from "react";

function Container({ children, className }) {
  return (
    <div
      className={`container ${className}`}
      style={{
        width: "100%",
        border: "1px solid red",
        height: "100vh",
        padding: 0
      }}
    >
      {children}
    </div>
  );
}

export default Container;
