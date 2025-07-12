import React from "react";
import { useTranslation } from "react-i18next";
import "../../style/onboarding.css";

export default function OnboardingIntro({ onStart, onSkipToTraditional }) {
  const [t] = useTranslation("global");

  return (
    <div className="onboarding-container onboarding-intro">
      <div className="onboarding-intro__content">
        <h1 className="onboarding-intro__title">
          {t("onboarding.intro.title")}
        </h1>
        <p className="onboarding-intro__subtitle">
          {t("onboarding.intro.subtitle")}
        </p>
        <p className="onboarding-intro__duration">
          {t("onboarding.intro.duration")}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <button onClick={onStart} className="btn-primary">
          {t("onboarding.intro.start")}
        </button>

        <button onClick={onSkipToTraditional} className="btn-secondary">
          {t("onboarding.intro.skip")}
        </button>
      </div>
    </div>
  );
}
