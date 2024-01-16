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
          src="https://lh3.googleusercontent.com/proxy/xyG_e1lATjiG3Y6_ZrV63xMjTlqejZ1BHoYCxUvioVDIGrlTmL3YLmb-tFaHtXWTLnXmef0KNJZV5I8NTp2JJHjEI-SK02U05hs23OnB8tI_hwiEcusv8veAFSzx3OIxd15nGXuU_zlp_zlfgBGpbqypRc26yj3Kmc9yu5a9cDyopu92tfAJvD5PfQW04m1I4Gw"
          alt=""
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
