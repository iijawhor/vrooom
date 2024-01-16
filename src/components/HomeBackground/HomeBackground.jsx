import React from "react";
import "./HomeBackground.css";
import { Container } from "../Exports/exports";

function HomeBackground() {
  console.log("Rendering HomeBackground Component...");
  return (
    <Container>
      <div className="homeBackground">
        <img
          className="homeBackgroundImage"
          src="https://img.freepik.com/premium-photo/taxi-is-parked-dark-street-night_859451-3089.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1699833600&semt=ais"
          alt="Background Image"
        />
        <div className="homeBackgroundDetails">
          <h2>
            Moving People, <br /> and the world
          </h2>
        </div>
      </div>
    </Container>
  );
}

export default HomeBackground;
