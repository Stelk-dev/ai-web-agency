import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FadeInSection } from "../components/FadeInSection";
import UseCasesHome from "./homes/UseCasesHome";
import CallToAction from "./homes/CallToAction";
import SpaceGradientBackground from "../views/FullSkyView";

export default function UseCasesPage() {
  const [t] = useTranslation("global");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        flexDirection: "column",
      }}
      className="center-div"
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "85%",
          height: "85%",
        }}
      >
        <SpaceGradientBackground
          starsNumber={15}
          glowingStarsNumber={14}
          backgroundColorBlack={true}
        />
      </div>

      {/* Content */}
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "0px 24px",
        }}
      >
        <div
          style={{
            width: "100%",
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "800px",
          }}
        >
          <h1
            style={{ fontWeight: "600", fontSize: "60px", lineHeight: "1.2" }}
          >
            {t("use_cases_page.title")}
          </h1>
          <p style={{ margin: "0px", padding: "0px" }}>
            {t("use_cases_page.description")}
          </p>
        </div>
      </div>

      <FadeInSection>
        <UseCasesHome topCases={false} colorText="white" />
      </FadeInSection>

      <FadeInSection>
        <CallToAction />
      </FadeInSection>
    </div>
  );
}
