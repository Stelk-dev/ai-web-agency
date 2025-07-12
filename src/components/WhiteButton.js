import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function WhiteButton({ text, style }) {
  const nav = useNavigate();
  const { t } = useTranslation("global");

  const buttonText = text || t("buttons.get_in_touch");

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
      {buttonText}
    </button>
  );
}
