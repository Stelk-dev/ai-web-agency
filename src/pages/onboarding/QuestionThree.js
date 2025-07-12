import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../style/onboarding.css";

export default function QuestionThree({ onNext, onBack }) {
  const [t] = useTranslation("global");
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    {
      id: "prefer-not-to-say",
      label: t("onboarding.question_three.options.prefer_not_say.label"),
      description: t(
        "onboarding.question_three.options.prefer_not_say.description"
      ),
    },
    {
      id: "under-10k",
      label: t("onboarding.question_three.options.under_10k.label"),
      description: t("onboarding.question_three.options.under_10k.description"),
    },
    {
      id: "10k-25k",
      label: t("onboarding.question_three.options.10k_25k.label"),
      description: t("onboarding.question_three.options.10k_25k.description"),
    },
    {
      id: "25k-50k",
      label: t("onboarding.question_three.options.25k_50k.label"),
      description: t("onboarding.question_three.options.25k_50k.description"),
    },
    {
      id: "over-50k",
      label: t("onboarding.question_three.options.over_50k.label"),
      description: t("onboarding.question_three.options.over_50k.description"),
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
          <div className="question-progress">
            {t("onboarding.question_three.progress")}
          </div>

          <h2 className="question-title">
            {t("onboarding.question_three.title")}
          </h2>

          <p className="question-subtitle">
            {t("onboarding.question_three.subtitle")}
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
            {t("onboarding.question_three.back")}
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`btn-next ${selectedOption ? "enabled" : ""}`}
          >
            {t("onboarding.question_three.see_results")}
          </button>
        </div>
      </div>
    </div>
  );
}
