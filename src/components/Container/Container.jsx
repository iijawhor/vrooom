import React from "react";

function Container({ children, className }) {
  return (
    <div
      className={`container ${className}`}
      style={{
        width: "100%",
        height: "100vh",
        padding: 0
      }}
    >
      {children}
    </div>
  );
}

export default Container;
