import React from "react";
import { useNavigate } from "react-router-dom";

export default function WhiteButton({ text = "GET IN TOUCH", style }) {
  const nav = useNavigate();

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
        ...style,
      }}
      onClick={() => nav("/contact-us")}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
    >
      {text}
    </button>
  );
}
