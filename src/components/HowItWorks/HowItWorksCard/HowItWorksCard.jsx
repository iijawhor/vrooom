import React from "react";
import "./HowItWorksCard.css";
function HowItWorksCard({
  img,
  title,
  description,
  className,
  userFlowDescriptionClass,
  cardImageClass
}) {
  return (
    <div className={`howItWorksCard ${className}`}>
      <div className="howItWorksCardImageContainer">
        {" "}
        <img
          src={img}
          alt="cardimage"
          className={`howItWorksCardImage ${cardImageClass}`}
        />
      </div>
      <div className="howItWorksCardDetails">
        {" "}
        <h2 className="howItWorksCardTitle">{title}</h2>
        <p className={`howItWorksCardDescription ${userFlowDescriptionClass}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default HowItWorksCard;
