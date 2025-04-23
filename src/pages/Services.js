import React, { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen is mobile sized
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Adjust size factors based on screen size
  const baseSize = isMobile ? 80 : 120;
  const sizeDecrement = isMobile ? 12 : 18;
  const gap = isMobile ? "16px" : "32px";
  const containerHeight = isMobile ? "180px" : "260px";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: gap,
        padding: "20px",
        width: "100%",
        height: containerHeight,
        overflow: "hidden",
      }}
    >
      {icons.map((item, index) => {
        // Calculate distance from center
        const distanceFromCenter = Math.abs(index - centerIndex);

        // Calculate size and opacity based on position
        const size = baseSize - distanceFromCenter * sizeDecrement;
        const opacity = 1 - distanceFromCenter * 0.15;

        // Calculate animation properties
        const animationDuration = 2 + distanceFromCenter * 0.3;
        const animationDelay = index * 0.2;

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
              overflow: "hidden",
              position: "relative",
              animation: `float-${index} ${animationDuration}s ease-in-out ${animationDelay}s infinite alternate`,
            }}
          >
            <img
              src={item.Icon}
              alt={item.name}
              style={{
                width: `${size * 0.7}px`,
                height: `${size * 0.7}px`,
                filter: "brightness(0) invert(1)",
                objectFit: "contain",
              }}
            />
          </div>
        );
      })}

      <style>{`
        @keyframes float-0 {
          0% { transform: translateY(0) scale(${
            1 - Math.abs(0 - centerIndex) * 0.04
          }); }
          100% { transform: translateY(${isMobile ? -5 : -10}px) scale(${
        1 - Math.abs(0 - centerIndex) * 0.04
      }); }
        }
        @keyframes float-1 {
          0% { transform: translateY(0) scale(${
            1 - Math.abs(1 - centerIndex) * 0.04
          }); }
          100% { transform: translateY(${isMobile ? -6 : -12}px) scale(${
        1 - Math.abs(1 - centerIndex) * 0.04
      }); }
        }
        @keyframes float-2 {
          0% { transform: translateY(0) scale(${
            1 - Math.abs(2 - centerIndex) * 0.04
          }); }
          100% { transform: translateY(${isMobile ? -7 : -14}px) scale(${
        1 - Math.abs(2 - centerIndex) * 0.04
      }); }
        }
        @keyframes float-3 {
          0% { transform: translateY(0) scale(${
            1 - Math.abs(3 - centerIndex) * 0.04
          }); }
          100% { transform: translateY(${isMobile ? -4 : -8}px) scale(${
        1 - Math.abs(3 - centerIndex) * 0.04
      }); }
        }
        @keyframes float-4 {
          0% { transform: translateY(0) scale(${
            1 - Math.abs(4 - centerIndex) * 0.04
          }); }
          100% { transform: translateY(${isMobile ? -7 : -14}px) scale(${
        1 - Math.abs(4 - centerIndex) * 0.04
      }); }
        }
        @keyframes float-5 {
          0% { transform: translateY(0) scale(${
            1 - Math.abs(5 - centerIndex) * 0.04
          }); }
          100% { transform: translateY(${isMobile ? -6 : -12}px) scale(${
        1 - Math.abs(5 - centerIndex) * 0.04
      }); }
        }
        @keyframes float-6 {
          0% { transform: translateY(0) scale(${
            1 - Math.abs(6 - centerIndex) * 0.04
          }); }
          100% { transform: translateY(${isMobile ? -5 : -10}px) scale(${
        1 - Math.abs(6 - centerIndex) * 0.04
      }); }
        }
      `}</style>
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
