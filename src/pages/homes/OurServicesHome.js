import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
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
          <p className="p-2-center">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const ResponsiveCardList = () => {
  const [t] = useTranslation("global");

  const features = [
    {
      title: t("services.features.llms.title"),
      subtitle: t("services.features.llms.subtitle"),
    },
    {
      title: t("services.features.production.title"),
      subtitle: t("services.features.production.subtitle"),
    },
    {
      title: t("services.features.data_platform.title"),
      subtitle: t("services.features.data_platform.subtitle"),
    },
    {
      title: t("services.features.deploying.title"),
      subtitle: t("services.features.deploying.subtitle"),
    },
    {
      title: t("services.features.upskilling.title"),
      subtitle: t("services.features.upskilling.subtitle"),
    },
    {
      title: t("services.features.integrating.title"),
      subtitle: t("services.features.integrating.subtitle"),
    },
  ];

  return (
    <div className="main-v">
      <div className="main-paragh">
        <h1 className="main-paragh-h1">{t("services.title")}</h1>
        <p className="main-paragh-desc">{t("services.description")}</p>
      </div>
      <div className="card-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            subtitle={feature.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCardList;
