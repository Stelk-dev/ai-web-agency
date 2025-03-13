import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../../style/ourservice.css";

const FeatureCard = ({ title, subtitle }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      style={{
        position: "relative",

        background: "linear-gradient(to right, #080b1c, #0e173e)",
        border: "1px solid #646d85",
        borderRadius: "16px",
        padding: "24px",
        color: "white",
        overflow: "hidden",
        height: "100%",
        cursor: "default",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            width: "150px",
            height: "150px",
            backgroundColor: "rgba(255, 255, 255, 0.14)",
            borderRadius: "50%",
            filter: "blur(20px)",
            opacity: 0.6,
            transition: "opacity 0.2s",
            left: `${mousePosition.x - 75}px`,
            top: `${mousePosition.y - 75}px`,
          }}
        />
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          gap: "16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <FaCheckCircle size={32} style={{ color: "#1a56db" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "white",
              margin: "0 0 4px 0",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "#a0aec0",
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

const ResponsiveCardList = () => {
  const features = [
    {
      title: "Building Systems with LLMs",
      subtitle:
        "Our expertise in LLMs allows us to create and optimize powerful AI-driven systems tailored to your needs",
    },
    {
      title: "Production-Ready AI Solutions",
      subtitle:
        "We guide you through the entire process, from prototyping to full-scale production, ensuring your AI initiatives are successful and sustainable",
    },
    {
      title: "Data Platform Engineering",
      subtitle:
        "We design and build scalable, robust data platforms on Azure to support your AI initiatives",
    },
    {
      title: "Deploying AI Applications",
      subtitle:
        "We ensure your data-centric and AI applications are deployed seamlessly, with reliability and scalability in mind.",
    },
    {
      title: "Upskilling Your Engineering Team",
      subtitle:
        "We provide hands-on training to elevate your team’s AI skills, ensuring they’re equipped to handle the latest technologies and best practices",
    },
    {
      title: "Integrating AI into Your Stack",
      subtitle:
        "We help you incorporate AI into your current systems to enhance their capabilities without disrupting your operations.",
    },
  ];

  return (
    <div style={{ padding: "32px", maxWidth: "1200px", margin: "232x" }}>
      <h1 style={{ fontSize: "70px", textAlign: "start", fontWeight: 300 }}>
        Our services
      </h1>
      <div className="card-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            subtitle={feature.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCardList;
