import React, { useState, useEffect } from "react";
import "../../style/use-cases.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { AllCases } from "../../UseCases";

const UseCasesHome = ({ topCases = true, colorText = "black" }) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Add a resize listener to track window width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine layout mode based on screen size
  const isMobile = windowWidth <= 768;

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
            flexDirection: isMobile
              ? "column"
              : isReversed
              ? "row-reverse"
              : "row",
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
          <div
            className="use-case-image"
            style={{ flex: 1, height: isMobile ? "250px" : "100%" }}
          >
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
            <img src={image} alt={`${title} showcase`} className="image" />
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
        <div style={{ height: isMobile ? "auto" : "50%" }}>
          <UseCase
            title={AllCases[0].title}
            description={AllCases[0].description}
            image={AllCases[0].image}
            route={AllCases[0].route}
          />
        </div>

        {/* Others */}
        {topCases ? (
          <div className="use-cases-row">
            {AllCases.slice(1, 4).map((useCase, index) => (
              <UseCaseBox
                key={useCase.title}
                title={useCase.title}
                text={useCase.description}
                image={useCase.image}
                route={useCase.route}
              />
            ))}
          </div>
        ) : (
          <>
            {AllCases.map((useCase, index) => (
              <UseCase
                key={useCase.title}
                title={useCase.title}
                description={useCase.description}
                image={useCase.image}
                route={useCase.route}
                isReversed={!isMobile && index % 2 === 0}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default UseCasesHome;
