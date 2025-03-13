import React from "react";

export default function OurServicesHome() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        padding: "0 24px",
        marginTop: "40px",
      }}
    >
      <h2
        style={{
          textAlign: "left",
          fontWeight: "300",
          fontSize: "36px",
          marginBottom: "40px",
        }}
      >
        Our Services
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: "1 1 300px",
            marginBottom: "30px",
            textAlign: "left",
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ fontWeight: "400", marginTop: "0" }}>AI Strategy</h3>
          <p>
            We help you identify and implement AI solutions that deliver real
            business value and competitive advantage.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 300px",
            marginBottom: "30px",
            textAlign: "left",
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ fontWeight: "400", marginTop: "0" }}>Implementation</h3>
          <p>
            Our team of experts will work with you to seamlessly integrate AI
            solutions into your existing systems.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 300px",
            marginBottom: "30px",
            textAlign: "left",
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ fontWeight: "400", marginTop: "0" }}>
            Training & Support
          </h3>
          <p>
            Comprehensive training and ongoing support to ensure your team can
            maximize the value of AI technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
