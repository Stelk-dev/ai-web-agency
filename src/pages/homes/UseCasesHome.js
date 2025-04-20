import React from "react";
import "../../style/use-cases.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import SupremMilkLogo from "../../assets/Prioraty-PRJ.png";
import SecondPrj1 from "../../assets/Secondary-PRJ.png";

export default function UseCasesHome() {
  const navigate = useNavigate();
  const PrimaryUseCase = () => {
    return (
      <div className="primary-use-case-wrapper">
        {/* Main content that gets the filter applied */}
        <div
          className="primary-use-case-container"
          onClick={() => navigate("/use-case/suprem-milk")}
          style={{ cursor: "pointer" }}
        >
          <div className="primary-use-case-content">
            <h1 className="use-case-title">Suprem - Milk</h1>
            <p className="use-case-description">
              Crypto Insiders, the largest cryptocurrency news platform in the
              Netherlands, attracts over 2 million... Crypto Insiders, the
              largest cryptocurrency news platform in the Netherlands, attracts
              over 2 million...
            </p>

            <div
              style={{
                marginTop: "32px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigate("/use-case/suprem-milk");
              }}
            >
              <p className="use-case-link">Read</p>
              <FaExternalLinkAlt size={"14px"} color="#1a56db" />
            </div>
          </div>
          <div className="use-case-image">
            <img
              src={SupremMilkLogo}
              alt="logo-big-use-case"
              className="image"
            />
          </div>
        </div>
      </div>
    );
  };

  const UseCaseBox = ({ title, text, image, route }) => {
    return (
      <div className="secondary-use-case-wrapper">
        {/* Main content that gets the filter applied */}
        <div
          className="secondary-use-case-container"
          onClick={() => navigate(route)}
          style={{ cursor: "pointer" }}
        >
          <div className="secondary-use-case-image">
            <img
              src={SecondPrj1}
              alt="logo-secondary-use-case"
              className="image"
            />
          </div>

          <div className="secondary-use-case-content">
            <h1 className="use-case-title">{title}</h1>
            <p className="use-case-description">{text}</p>
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
      <div className="main-paragh">
        <h1 className="main-paragh-h1">Our latest projects</h1>
        <p className="main-paragh-desc">
          Our track record spans from initial strategy development to full
          implementation, always focusing on practical outcomes that drive solid
          business value. Here are some of our most recent projects:
        </p>
      </div>

      {/* Cases */}
      <div
        className="main-v full-v"
        style={{
          height: "1000px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Primary */}
        <div style={{ height: "50%" }}>
          <PrimaryUseCase />
        </div>

        {/* Others */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            width: "100%",
            height: "50%",
          }}
        >
          <UseCaseBox
            title={"N and Group"}
            text={
              "React Hook useEffect has a missing dependency: 'doubledTestimonials."
            }
            route="/use-case/n-and-group"
          />
          <UseCaseBox
            title={"The Legacy"}
            text={"React Hook emove the dependency array"}
            route="/use-case/the-legacy"
          />
          <UseCaseBox
            title={"Retail Tune"}
            text={"Either include it or remove the dependency array"}
            route="/use-case/retail-tune"
          />
        </div>
      </div>
    </div>
  );
}
