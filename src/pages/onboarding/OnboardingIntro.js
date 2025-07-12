import React from "react";
import "../../style/onboarding.css";

export default function OnboardingIntro({ onStart, onSkipToTraditional }) {
  return (
    <div className="onboarding-container onboarding-intro">
      <div className="onboarding-intro__content">
        <h1 className="onboarding-intro__title">
          Ride the AI wave with Datalumina®
        </h1>
        <p className="onboarding-intro__subtitle">
          Answer two quick questions, and we'll connect you with the exact
          resource, training, or service that will help you succeed.
        </p>
        <p className="onboarding-intro__duration">(it takes 15 seconds)</p>
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
          Start Journey
        </button>

        <button onClick={onSkipToTraditional} className="btn-secondary">
          Skip to traditional contact form
        </button>
      </div>
    </div>
  );
}
