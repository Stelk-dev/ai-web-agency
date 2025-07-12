import React, { useState } from "react";
import "../../style/onboarding.css";

export default function QuestionOne({ onNext, onBack }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    {
      id: "development",
      label: "Client searching for the development of an AI product",
      description: "Need a custom AI solution built from scratch",
    },
    {
      id: "consulting",
      label: "Client searching for AI consulting",
      description: "Need strategic guidance on AI implementation",
    },
    {
      id: "integration",
      label: "Looking to integrate AI into existing systems",
      description: "Want to enhance current operations with AI",
    },
    {
      id: "training",
      label: "Team needs AI training and upskilling",
      description: "Want to educate your team on AI technologies",
    },
  ];

  const handleOptionToggle = (optionId) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleNext = () => {
    if (selectedOptions.length > 0) {
      onNext({ questionOne: selectedOptions });
    }
  };

  return (
    <div className="onboarding-container">
      <div className="question-container">
        <div className="question-header">
          <div className="question-progress">Question 1 of 2</div>

          <h2 className="question-title">What best describes you?</h2>

          <p className="question-subtitle">
            Select all that apply to your current needs
          </p>
        </div>

        <div className="options-grid">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionToggle(option.id)}
              className={`option-card ${
                selectedOptions.includes(option.id) ? "selected" : ""
              }`}
            >
              <div className="option-card__header">
                <div
                  className={`option-card__checkbox ${
                    selectedOptions.includes(option.id) ? "checked" : ""
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
            disabled={selectedOptions.length === 0}
            className={`btn-next ${
              selectedOptions.length > 0 ? "enabled" : ""
            }`}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}
