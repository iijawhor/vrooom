import React from "react";
import "./HowItWorksCard.css";
function HowItWorksCard({ img, title, description }) {
  return (
    <div className="howItWorksCard">
      <img src={img} alt="cardimage" className="howItWorksCardImage" />
      <h2 className="howItWorksCardTitle">{title}</h2>
      <p className="howItWorksCardDescription">{description}</p>
    </div>
  );
}

export default HowItWorksCard;
