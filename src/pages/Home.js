import StarryNightSky from "../views/FullSkyView";
import React from "react";
import HeaderHome from "./homes/HeaderHome";
import ReviewersLogosSlider from "./homes/ReviewersLogosSlider";
import OurServicesHome from "./homes/OurServicesHome";
import CallToAction from "./homes/CallToAction";

export default function Home() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <StarryNightSky />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeaderHome />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "64px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100vw",
          color: "white",
          textAlign: "center",
          background: "linear-gradient(to bottom, #1d3576, black)", // Deep blue background
        }}
      >
        <ReviewersLogosSlider />

        <OurServicesHome />

        <CallToAction />
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
