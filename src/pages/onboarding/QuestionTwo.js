import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../style/onboarding.css";

export default function QuestionTwo({ onNext, onBack }) {
  const [t] = useTranslation("global");
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    {
      id: "startup",
      label: t("onboarding.question_two.options.startup.label"),
      description: t("onboarding.question_two.options.startup.description"),
    },
    {
      id: "small",
      label: t("onboarding.question_two.options.small.label"),
      description: t("onboarding.question_two.options.small.description"),
    },
    {
      id: "medium",
      label: t("onboarding.question_two.options.medium.label"),
      description: t("onboarding.question_two.options.medium.description"),
    },
    {
      id: "large",
      label: t("onboarding.question_two.options.large.label"),
      description: t("onboarding.question_two.options.large.description"),
    },
    {
      id: "individual",
      label: t("onboarding.question_two.options.individual.label"),
      description: t("onboarding.question_two.options.individual.description"),
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
          <div className="question-progress">
            {t("onboarding.question_two.progress")}
          </div>

          <h2 className="question-title">
            {t("onboarding.question_two.title")}
          </h2>

          <p className="question-subtitle">
            {t("onboarding.question_two.subtitle")}
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
            {t("onboarding.question_two.back")}
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`btn-next ${selectedOption ? "enabled" : ""}`}
          >
            {t("onboarding.question_two.next")}
          </button>
        </div>
      </div>
    </div>
  );
}
