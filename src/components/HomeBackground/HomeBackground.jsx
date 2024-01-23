import React from "react";
import "./HomeBackground.css";
import { Container } from "../Exports/exports";

function HomeBackground() {
  return (
    <Container>
      <div className="homeBackground">
        <img
          className="homeBackgroundImage"
          src="https://c0.wallpaperflare.com/preview/582/785/252/4k-wallpaper-action-asphalt-automobile.jpg"
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
