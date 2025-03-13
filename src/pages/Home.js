import StarryNightSky from "../views/FullSkyView";
import React from "react";
import HeaderHome from "./homes/HeaderHome";
import ReviewersLogosSlider from "./homes/ReviewersLogosSlider";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <StarryNightSky />

      <div
        style={{
          position: "absolute",
          display: "flex",
          gap: "64px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100vw",
          color: "white",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <HeaderHome />

        <ReviewersLogosSlider />

        {/* <div
          style={{ height: "1400px", backgroundColor: "red", width: "100%" }}
        ></div> */}
        <div
          style={{
            height: "1400px",
            width: "100%",
          }}
        ></div>
        <div style={{ height: "1400px", width: "100%" }}></div>
      </div>
    </div>
  );
}
