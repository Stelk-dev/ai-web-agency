import React, { useState } from "react";
import "../../style/onboarding.css";

export default function QuestionTwo({ onNext, onBack }) {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    {
      id: "startup",
      label: "Startup (1-10 employees)",
      description: "Early-stage company looking to leverage AI for growth",
    },
    {
      id: "small",
      label: "Small Business (11-50 employees)",
      description: "Established business ready to integrate AI solutions",
    },
    {
      id: "medium",
      label: "Medium Company (51-200 employees)",
      description: "Growing company seeking AI optimization",
    },
    {
      id: "large",
      label: "Large Enterprise (200+ employees)",
      description: "Enterprise-level AI transformation and scaling",
    },
    {
      id: "individual",
      label: "Individual / Freelancer",
      description: "Personal AI learning or small project needs",
    },
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (selectedOption) {
      onNext({ questionTwo: selectedOption });
    }
  };

  return (
    <div className="onboarding-container">
      <div className="question-container">
        <div className="question-header">
          <div className="question-progress">Question 2 of 2</div>

          <h2 className="question-title">What's your company size?</h2>

          <p className="question-subtitle">
            This helps us tailor our recommendations to your scale
          </p>
        </div>

        <div className="options-grid">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className={`option-card ${
                selectedOption === option.id ? "selected" : ""
              }`}
            >
              <div className="option-card__header">
                <div
                  className={`option-card__radio ${
                    selectedOption === option.id ? "selected" : ""
                  }`}
                ></div>
                <div className="option-card__content">
                  <h4 className="option-card__label">{option.label}</h4>
                  <p className="option-card__description">
                    {option.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="navigation-buttons">
          <button onClick={onBack} className="btn-back">
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`btn-next ${selectedOption ? "enabled" : ""}`}
          >
            Get My Recommendations
          </button>
        </div>
      </div>
    </div>
  );
}
