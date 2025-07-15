import StarryNightSky from "../views/FullSkyView";

import HeaderHome from "./homes/HeaderHome";
import ResponsiveCardList from "./homes/OurServicesHome";
import CallToAction from "./homes/CallToAction";
import UseCasesHome from "./homes/UseCasesHome";
import ReviewsFromClientsHome from "./homes/ReviewsFromClientsHome";
import ReviewersLogosSlider from "./homes/ReviewersLogosSlider";
import { FadeInSection } from "../components/FadeInSection";

import { useTranslation } from "react-i18next";
import SEO from "../components/SEO/SEO";

export default function Home() {
  const { t } = useTranslation("global");
  const seo = t("seo.home", { returnObjects: true });

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        robots={seo.robots}
        canonical={seo.canonical}
        schema={seo.schema}
      />
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
          <ReviewersLogosSlider />

          <FadeInSection>
            <ResponsiveCardList />
          </FadeInSection>
          <br />
          <FadeInSection>
            <UseCasesHome colorText="white" />
          </FadeInSection>
          <br />
          <FadeInSection>
            <ReviewsFromClientsHome />
          </FadeInSection>
          {/* <br />
        <br />
        <br /> */}
          {/* <FadeInSection>
          <VideosHome />
        </FadeInSection> */}

          <FadeInSection>
            <CallToAction />
          </FadeInSection>
        </div>
      </div>
    </>
  );
}
