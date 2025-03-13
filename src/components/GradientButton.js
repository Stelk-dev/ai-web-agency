import React, { useState } from "react";

export default function GradientButton({ text = "BUTTON TEXT", onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    backgroundColor: "rgb(2, 14, 56)",
    // background: "linear-gradient(to right, #4051b8, #081853)",
    borderRadius: "32px",
    outline: "none",
    border: "0px",
    fontWeight: "500",
    padding: "12px 24px",
    cursor: "pointer",
    marginTop: "12px",
    color: "white",
    transition: "background 0.3s ease",
  };

  const hoverStyle = {
    ...baseStyle,
    backgroundColor: "rgb(2, 14, 56, 0.6)",
  };

  return (
    <button
      style={isHovered ? hoverStyle : baseStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
}
