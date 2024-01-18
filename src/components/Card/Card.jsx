import React from "react";
import "./Card.css";
import "./CardResponsive.css";
function Card({
  img,
  title,
  imgClass,
  globalConnectCitiesCardResponsive,
  description,
  cities,
  globaConnectCitiesCardDetails,
  className
}) {
  return (
    <div className={`Card ${className}`}>
      {img && <img className={`cardImage ${imgClass}`} src={img} alt="" />}
      <div className={`cardDetails ${globaConnectCitiesCardDetails}`}>
        {cities && <h2 className="cardCities">{cities}</h2>}
        {title && <h3 className="cardTitle">{title}</h3>}

        {description && <p className="cardDescription">{description}</p>}
      </div>
    </div>
  );
}

export default Card;
