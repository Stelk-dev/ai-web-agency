import StarryNightSky from "../views/FullSkyView";
import React, { useRef, useEffect, useState } from "react";
import HeaderHome from "./homes/HeaderHome";
import OurServicesHome from "./homes/OurServicesHome";
import CallToAction from "./homes/CallToAction";
import UseCasesHome from "./homes/UseCasesHome";
import ReviewsFromClientsHome from "./homes/ReviewsFromClientsHome";
import ReviewersLogosSlider from "./homes/ReviewersLogosSlider";
import VideosHome from "./homes/VideosHome";

// FadeInSection helper component
function FadeInSection({ children }) {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(40px)",
        transition:
          "opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

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
        <ReviewersLogosSlider />

        <FadeInSection>
          <OurServicesHome />
        </FadeInSection>

        <FadeInSection>
          <UseCasesHome />
        </FadeInSection>

        <FadeInSection>
          <ReviewsFromClientsHome />
        </FadeInSection>

        <FadeInSection>
          <VideosHome />
        </FadeInSection>

        <FadeInSection>
          <CallToAction />
        </FadeInSection>
      </div>
    </div>
  );
}
