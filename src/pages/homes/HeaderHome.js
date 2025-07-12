import React from "react";
import WhiteButton from "../../components/WhiteButton";
import GradientButton from "../../components/GradientButton";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeaderHome() {
  const nav = useNavigate();
  const [t] = useTranslation("global");

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        gap: "32px",
        width: "100vw",
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
          color: "white",
        }}
      >
         {t("welcome")} Algorithmx®
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
        {t("header.description")}
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <WhiteButton />
        <GradientButton
          text={t("header.check_portfolio")}
          onClick={() => nav("/use-cases")}
        />
      </div>
    </div>
  );
}
