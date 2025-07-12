import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "../../style/onboarding.css";
import { useNavigate } from "react-router-dom";

export default function OnboardingResults({ answers }) {
  const nav = useNavigate();
  const [t] = useTranslation("global");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  // Generate recommendations based on answers
  const getRecommendations = () => {
    const recommendations = [];
    const { questionOne, questionTwo } = answers;

    // Service recommendations based on first question
    if (questionOne.includes("development")) {
      recommendations.push({
        title: t("onboarding.results.recommendations.development.title"),
        description: t(
          "onboarding.results.recommendations.development.description"
        ),
        icon: "🛠️",
      });
    }

    if (questionOne.includes("consulting")) {
      recommendations.push({
        title: t("onboarding.results.recommendations.consulting.title"),
        description: t(
          "onboarding.results.recommendations.consulting.description"
        ),
        icon: "💡",
      });
    }

    if (questionOne.includes("integration")) {
      recommendations.push({
        title: t("onboarding.results.recommendations.integration.title"),
        description: t(
          "onboarding.results.recommendations.integration.description"
        ),
        icon: "🔗",
      });
    }

    if (questionOne.includes("training")) {
      recommendations.push({
        title: t("onboarding.results.recommendations.training.title"),
        description: t(
          "onboarding.results.recommendations.training.description"
        ),
        icon: "📚",
      });
    }

    // Add size-specific recommendations
    if (questionTwo === "startup" || questionTwo === "small") {
      recommendations.push({
        title: t("onboarding.results.recommendations.pilot.title"),
        description: t("onboarding.results.recommendations.pilot.description"),
        icon: "🚀",
      });
    } else if (questionTwo === "large") {
      recommendations.push({
        title: t("onboarding.results.recommendations.enterprise.title"),
        description: t(
          "onboarding.results.recommendations.enterprise.description"
        ),
        icon: "🏢",
      });
    }

    // Add data platform recommendation for medium to large companies
    if (questionTwo === "medium" || questionTwo === "large") {
      recommendations.push({
        title: t("onboarding.results.recommendations.data_platform.title"),
        description: t(
          "onboarding.results.recommendations.data_platform.description"
        ),
        icon: "🗄️",
      });
    }

    return recommendations.slice(0, 3); // Limit to 3 recommendations
  };

  const recommendations = getRecommendations();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Prepare email data including answers
    const emailData = {
      ...formData,
      onboarding_answers: JSON.stringify(answers),
      recommendations: recommendations.map((r) => r.title).join(", "),
    };

    // Using EmailJS to send the form
    emailjs
      .send(
        "service_l86qclt",
        "template_6xfchin",
        emailData,
        "L7ua-WuLwhYL-Ji9Z"
      )
      .then((result) => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setError("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      });
  };

  if (isSubmitted) {
    return (
      <div className="onboarding-container success-container">
        <div className="success-card">
          <div className="success-icon">🎉</div>
          <h2 className="success-title">
            {t("onboarding.results.form.success_title")}
          </h2>
          <p className="success-message">
            {t("onboarding.results.form.success_message")}
          </p>
          <div
            style={{ display: "flex", gap: "12px", justifyContent: "center" }}
          >
            <button onClick={() => nav("/")} className="btn-back">
              {t("onboarding.results.form.home")}
            </button>
            <button onClick={() => nav("/use-cases")} className="btn-primary">
              {t("onboarding.results.form.portfolio")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="onboarding-container with-top-padding">
      <div className="results-container">
        {/* Recommendations Section */}
        <div className="results-recommendations">
          <div className="recommendations-badge">
            {t("onboarding.results.title")}
          </div>

          <h2 className="results-title">{t("onboarding.results.title")}</h2>

          <div className="recommendations-grid">
            {recommendations.map((rec, index) => (
              <div key={index} className="recommendation-card">
                <div className="recommendation-card__content">
                  <div className="recommendation-card__icon">{rec.icon}</div>
                  <div>
                    <h4 className="recommendation-card__title">{rec.title}</h4>
                    <p className="recommendation-card__description">
                      {rec.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="results-contact">
          <h3 className="contact-form-title">
            {t("onboarding.results.contact_title")}
          </h3>
          <p className="contact-form-subtitle">
            {t("onboarding.results.contact_subtitle")}
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                {t("onboarding.results.form.name")} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder={t("onboarding.results.form.name_placeholder")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                {t("onboarding.results.form.email")} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder={t("onboarding.results.form.email_placeholder")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                {t("onboarding.results.form.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder={t("onboarding.results.form.phone_placeholder")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                {t("onboarding.results.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder={t("onboarding.results.form.message_placeholder")}
              />
            </div>

            {error && <div className="form-error">{error}</div>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="form-submit"
            >
              {isSubmitting
                ? t("onboarding.results.form.sending")
                : t("onboarding.results.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
