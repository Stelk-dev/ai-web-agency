import React, { useState } from "react";
import "../../style/onboarding.css";

export default function QuestionThree({ onNext, onBack }) {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    {
      id: "prefer-not-to-say",
      label: "Prefer not to say",
      description: "We'll discuss budget details during our consultation",
    },
    {
      id: "under-10k",
      label: "<10,000€",
      description: "Small project or pilot implementation",
    },
    {
      id: "10k-25k",
      label: "10,000€ - 25,000€",
      description: "Medium-scale AI solution with custom development",
    },
    {
      id: "25k-50k",
      label: "25,000€ - 50,000€",
      description: "Comprehensive AI platform with advanced features",
    },
    {
      id: "over-50k",
      label: ">50,000€",
      description: "Enterprise-level AI transformation project",
    },
  ];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (selectedOption) {
      onNext({ questionThree: selectedOption });
    }
  };

  return (
    <div className="onboarding-container">
      <div className="question-container">
        <div className="question-header">
          <div className="question-progress">Question 3 of 3</div>

          <h2 className="question-title">
            There's a budget that you have in mind?
          </h2>

          <p className="question-subtitle">
            This helps us recommend the most suitable solution for your
            investment
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
