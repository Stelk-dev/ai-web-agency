import React from "react";

export default function HeaderHome() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        gap: "32px",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontWeight: "300",
          fontSize: "70px",
          height: "fit-content",
          margin: "0px",
          textAlign: "center",
        }}
      >
        Helping you integrate AI with clarity & confidence
      </h1>
      <div
        style={{
          maxWidth: "600px",
          textAlign: "center",
          fontSize: "18px",
          color: "#F7F7F7",
          lineHeight: "1.6",
        }}
      >
        AI and data reshape our world at a relentless speed, yet most find
        themselves caught between possibility and complexity. We are here to
        help you identify what truly gives that competitive advantage.
      </div>

      <button
        style={{
          backgroundColor: "white",
          borderRadius: "32px",
          outline: "none",
          border: "0px",
          fontWeight: "500",
          padding: "12px 24px",
          cursor: "pointer",
          marginTop: "12px",
        }}
      >
        GET IN TOUCH
      </button>
    </div>
  );
}
