import React from "react";

export default function WhiteButton({ text = "GET IN TOUCH", onClick }) {
  return (
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
        transition: "background-color 0.3s ease",
      }}
      onClick={onClick}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
    >
      {text}
    </button>
  );
}
