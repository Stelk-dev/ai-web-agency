import React from "react";
import StarryNightSky from "../views/FullSkyView";

export default function AboutUs() {
  return (
    <>
      <div
        style={{
          height: "700px",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "0px 24px",
          position: "relative",
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
          <StarryNightSky
            starsNumber={15}
            glowingStarsNumber={4}
            backgroundColorBlack={true}
          />
        </div>

        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{ fontWeight: "600", fontSize: "60px", lineHeight: "1.2" }}
          >
            Our Solutions
          </h1>
          <p style={{ margin: "0px", padding: "0px" }}>
            These days, staying ahead often means turning data and AI into
            business value. But with countless solutions and approaches
            available, how do you identify and implement what truly matters for
            your organization? What does it take to become an AI-first type of
            company? We're here to help you make the right decisions.
          </p>
        </div>
      </div>

      {/* Use cases */}
      <div
        style={{ backgroundColor: "red", width: "100vw", height: "100vh" }}
      ></div>
    </>
  );
}
