import React, { useEffect } from "react";
import SpaceGradientBackground from "../views/FullSkyView";
import { FadeInSection } from "../components/FadeInSection";

import ChatGptIcon from "../assets/icons/chatgpt.png";
import ClaudeIcon from "../assets/icons/claude.png";
import N8N from "../assets/icons/n8n.png";
import Python from "../assets/icons/python.png";
import Docker from "../assets/icons/docker.png";
import Firebase from "../assets/icons/firebase.png";
import NextJs from "../assets/icons/next-js.png";
import UseCasesHome from "./homes/UseCasesHome";
import ResponsiveCardList from "./homes/OurServicesHome";
import CallToAction from "./homes/CallToAction";

const CircleCarousel = () => {
  // Icons for the circles
  const icons = [
    { Icon: Docker, name: "Docker" },
    { Icon: ChatGptIcon, name: "GPT" },
    { Icon: ClaudeIcon, name: "Claude" },
    { Icon: Python, name: "Python" },
    { Icon: N8N, name: "N8N" },
    { Icon: NextJs, name: "NextJS" },
    { Icon: Firebase, name: "Firebase" },
  ];

  // Get the center index
  const centerIndex = Math.floor(icons.length / 2);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        padding: "20px",
        width: "100%",
        height: "260px", // Increased height to accommodate larger circles
        overflow: "hidden",
      }}
    >
      {icons.map((item, index) => {
        // Calculate distance from center
        const distanceFromCenter = Math.abs(index - centerIndex);

        // Calculate size and opacity based on position
        // Increased base size from 60 to 90
        const size = 120 - distanceFromCenter * 18;
        const opacity = 1 - distanceFromCenter * 0.15;

        return (
          <div
            key={item.name}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              backgroundColor: "#4051b8",
              opacity: opacity,
              transition: "all 0.3s ease",
              transform: `scale(${1 - distanceFromCenter * 0.04})`,
              zIndex: 10 - distanceFromCenter,
              overflow: "hidden", // Added to ensure image stays within circle
            }}
          >
            <img
              src={item.Icon}
              alt={item.name}
              style={{
                width: `${size * 0.7}px`, // Slightly increased from 0.6 to 0.7
                height: `${size * 0.7}px`,
                filter: "brightness(0) invert(1)", // Makes any image white
                objectFit: "contain", // Ensures the image maintains its aspect ratio
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default function Services() {
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
            Algorithmx Services
          </h1>
          <p style={{ margin: "0px", padding: "0px" }}>
            These days, staying ahead often means turning data and AI into
            business value. But with countless solutions and approaches
            available, how do you identify and implement what truly matters for
            your organization? What does it take to become an AI-first type of
            company? We're here to help you make the right decisions
          </p>
        </div>
      </div>

      {/* Tools used */}
      <FadeInSection>
        <div
          style={{
            width: "100vw",
            color: "white",
          }}
        >
          <div style={{ padding: "0px 24px" }}>
            <div className="center-div">
              <h1
                style={{
                  fontWeight: "500",
                  fontSize: "36px",
                  lineHeight: "1.2",
                  margin: "0px",
                }}
              >
                The best tools for the best job
              </h1>
            </div>

            <div className="center-div">
              <CircleCarousel />
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <ResponsiveCardList />
      </FadeInSection>
      <div style={{ height: "300px" }} />

      <FadeInSection>
        <UseCasesHome colorText="white" />
      </FadeInSection>
      <div style={{ height: "300px" }} />

      <FadeInSection>
        <CallToAction />
      </FadeInSection>
    </div>
  );
}
