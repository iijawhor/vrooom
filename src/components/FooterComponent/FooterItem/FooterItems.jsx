import React from "react";
import "./FooterItem.css";
import { footerData } from "../../Exports/exports";
function FooterItems() {
  return (
    <div className="footerItem">
      {Object.values(footerData).map((footerItem) => {
        <h1>{footerItem}</h1>;
      })}
      <h1 style={{ color: "white" }}>Footer Item</h1>
    </div>
  );
}

export default FooterItems;
