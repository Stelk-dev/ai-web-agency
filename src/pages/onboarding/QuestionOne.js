import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../style/onboarding.css";

export default function QuestionOne({ onNext, onBack }) {
  const [t] = useTranslation("global");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    {
      id: "development",
      label: t("onboarding.question_one.options.development.label"),
      description: t("onboarding.question_one.options.development.description"),
    },
    {
      id: "consulting",
      label: t("onboarding.question_one.options.consulting.label"),
      description: t("onboarding.question_one.options.consulting.description"),
    },
    {
      id: "integration",
      label: t("onboarding.question_one.options.integration.label"),
      description: t("onboarding.question_one.options.integration.description"),
    },
    {
      id: "training",
      label: t("onboarding.question_one.options.training.label"),
      description: t("onboarding.question_one.options.training.description"),
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
          <div className="question-progress">
            {t("onboarding.question_one.progress")}
          </div>

          <h2 className="question-title">
            {t("onboarding.question_one.title")}
          </h2>

          <p className="question-subtitle">
            {t("onboarding.question_one.subtitle")}
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
            {t("onboarding.question_one.back")}
          </button>

          <button
            onClick={handleNext}
            disabled={selectedOptions.length === 0}
            className={`btn-next ${
              selectedOptions.length > 0 ? "enabled" : ""
            }`}
          >
            {t("onboarding.question_one.next")}
          </button>
        </div>
      </div>
    </div>
  );
}
