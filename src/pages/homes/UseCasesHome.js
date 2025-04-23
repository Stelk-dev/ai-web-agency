import React from "react";
import "../../style/use-cases.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import SupremMilkLogo from "../../assets/banner-1.png";
import SecondPrj1 from "../../assets/banner-3.png";
import SecondPrj2 from "../../assets/banner-2.png";
import SecondPrj3 from "../../assets/banner-4.png";

const UseCasesHome = ({ topCases = true, colorText = "black" }) => {
  const navigate = useNavigate();

  // Dummy data for primary use cases
  const primaryUseCases = [
    {
      title: "Suprem - Milk",
      description:
        "Crypto Insiders, the largest cryptocurrency news platform in the Netherlands, attracts over 2 million visitors monthly. Their team needed a reliable system to manage content creation and distribution across multiple channels.",
      image: SupremMilkLogo,
      route: "/use-case/suprem-milk",
    },
    {
      title: "Quantum Solutions",
      description:
        "A leading tech innovator in quantum computing needed a sophisticated dashboard to visualize complex data outputs. We delivered an intuitive interface that simplified user interaction with advanced computational results.",
      image: SecondPrj1,
      route: "/use-case/quantum-solutions",
    },
    {
      title: "EcoMetrics",
      description:
        "This environmental monitoring startup required a scalable platform to process sensor data from thousands of locations. Our solution provided real-time analytics and actionable insights for sustainability decision-makers.",
      image: SecondPrj2,
      route: "/use-case/eco-metrics",
    },
  ];

  const ReadMore = ({ route }) => (
    <div
      style={{
        marginTop: "32px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
      onClick={(e) => {
        e.stopPropagation();
        navigate(route);
      }}
    >
      <p className="use-case-link">Read</p>
      <FaExternalLinkAlt size={"14px"} color="#1a56db" />
    </div>
  );

  const UseCase = ({
    title,
    description,
    image,
    route,
    isReversed = false,
  }) => {
    return (
      <div className="primary-use-case-wrapper">
        <div
          className="primary-use-case-container"
          onClick={() => navigate(route)}
          style={{
            flexDirection: isReversed ? "row-reverse" : "row",
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <div className="primary-use-case-content">
            <div>
              <h1 className="use-case-title-primary">{title}</h1>
              <p className="use-case-description-primary">{description}</p>
            </div>
            <ReadMore route={route} />
          </div>
          <div className="use-case-image" style={{ flex: 1, height: "100%" }}>
            <img src={image} alt={`${title} showcase`} className="image" />
          </div>
        </div>
      </div>
    );
  };

  const UseCaseBox = ({ title, text, image, route }) => {
    return (
      <div className="secondary-use-case-wrapper" style={{ height: "450px" }}>
        <div
          className="secondary-use-case-container"
          onClick={() => navigate(route)}
          style={{ cursor: "pointer" }}
        >
          <div className="secondary-use-case-image">
            <img
              src={image || SecondPrj1}
              alt={`${title} showcase`}
              className="image"
            />
          </div>

          <div className="secondary-use-case-content">
            <h1 className="use-case-title">{title}</h1>
            <p className="use-case-description">{text}</p>
          </div>

          <div
            style={{
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              padding: "0px 32px",
              gap: "8px",
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(route);
            }}
          >
            <p className="use-case-link">Read</p>
            <FaExternalLinkAlt size={"14px"} color="#1a56db" />
          </div>
        </div>
      </div>
    );
  };

  const secondaryUseCases = [
    {
      title: "N and Group",
      text: "An enterprise retail group with over 50 locations needed to consolidate their digital presence. We built a centralized platform with localized customization features.",
      image: SecondPrj1,
      route: "/use-case/n-and-group",
    },
    {
      title: "Virality System",
      text: "This heritage brand required a digital transformation that respected their century-old tradition while embracing modern technology for a new generation of customers.",
      image: SecondPrj2,
      route: "/use-case/virality-system",
    },
    {
      title: "Extra Outdoor",
      text: "A music-focused retail chain needed analytics to understand customer behavior across physical and digital touchpoints, resulting in a 27% increase in customer retention.",
      image: SecondPrj3,
      route: "/use-case/extra-outdoor",
    },
  ];

  return (
    <div className="main-v">
      <div className="main-paragh" style={{ color: colorText }}>
        <h1 className="main-paragh-h1">Our latest projects</h1>
        <p className="main-paragh-desc">
          Our track record spans from initial strategy development to full
          implementation, always focusing on practical outcomes that drive solid
          business value. Here are some of our most recent projects:
        </p>
      </div>

      <div
        className="main-v full-v"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Primary */}
        <div style={{ height: "50%" }}>
          <UseCase
            title={primaryUseCases[0].title}
            description={primaryUseCases[0].description}
            image={primaryUseCases[0].image}
            route={primaryUseCases[0].route}
          />
        </div>

        {/* Others */}
        {topCases ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              width: "100%",
              height: "50%",
            }}
          >
            {secondaryUseCases.map((useCase, index) => (
              <UseCaseBox
                key={useCase.title}
                title={useCase.title}
                text={useCase.text}
                image={useCase.image}
                route={useCase.route}
              />
            ))}
          </div>
        ) : (
          <>
            {secondaryUseCases.map((useCase, index) => (
              <UseCase
                key={useCase.title}
                title={useCase.title}
                description={useCase.text}
                image={useCase.image}
                route={useCase.route}
                isReversed={index % 2 === 0}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default UseCasesHome;
