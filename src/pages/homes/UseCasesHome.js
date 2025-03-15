import React from "react";
import "../../style/use-cases.css";

import SupremMilkLogo from "../../assets/SupremMilk-logo.png";

export default function UseCasesHome() {
  const PrimaryUseCase = () => {
    return (
      <div className="primary-use-case-container">
        <div className="primary-use-case-content">
          <h1 className="use-case-title">Suprem - Milk</h1>
          <p className="use-case-description">
            Crypto Insiders, the largest cryptocurrency news platform in the
            Netherlands, attracts over 2 million... Crypto Insiders, the largest
            cryptocurrency news platform in the Netherlands, attracts over 2
            million...
          </p>
        </div>
        <div className="use-case-image">
          <img src={SupremMilkLogo} alt="logo-big-use-case" className="image" />
        </div>
      </div>
    );
  };

  const UseCaseBox = ({ title, text, image }) => {
    return (
      <div className="secondary-use-case-container">
        <div className="use-case-image"></div>

        <div className="secondary-use-case-content">
          <h1 className="use-case-title">{title}</h1>
          <p className="use-case-description">{text}</p>
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
            title={"Suprem Milk"}
            text={
              "React Hook useEffect has a missing dependency: 'doubledTestimonials.length'. Either include it or remove the dependency array"
            }
          />
          <UseCaseBox
            title={"Suprem Milk"}
            text={
              "React Hook useEffect has a missing dependency: 'doubledTestimonials.length'. Either include it or remove the dependency array. React Hook useEffect has a missing dependency: 'doubledTestimonials.length'. Either include it or remove the dependency array"
            }
          />
          <UseCaseBox
            title={"Suprem Milk"}
            text={
              "React Hook useEffect has a missing dependency: 'doubledTestimonials.length'. Either include it or remove the dependency array. React Hook useEffect has a missing dependency: 'doubledTestimonials.length'. Either include it or remove the dependency array"
            }
          />
        </div>
      </div>
    </div>
  );
}
