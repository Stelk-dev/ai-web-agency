import StarryNightSky from "../views/FullSkyView";
import React from "react";
import HeaderHome from "./homes/HeaderHome";
import OurServicesHome from "./homes/OurServicesHome";
import CallToAction from "./homes/CallToAction";
import UseCasesHome from "./homes/UseCasesHome";
import ReviewsFromClientsHome from "./homes/ReviewsFromClientsHome";
import ReviewersLogosSlider from "./homes/ReviewersLogosSlider";
import VideosHome from "./homes/VideosHome";

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
          gap: "164px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100vw",
          color: "white",
          textAlign: "center",
          background: "linear-gradient(to bottom, #0a3677, black)", // Deep blue background
        }}
      >
        <OurServicesHome />

        <ReviewersLogosSlider />

        <UseCasesHome />

        <ReviewsFromClientsHome />

        <VideosHome />

        <CallToAction />
      </div>
    </div>
  );
}
