import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SpaceGradientBackground from "../views/FullSkyView";

export default function AboutUs() {
  const [t] = useTranslation("global");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

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
          <SpaceGradientBackground
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
            {t("about_us.title")}
          </h1>
          <p style={{ margin: "0px", padding: "0px" }}>
            {t("about_us.description")}
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
