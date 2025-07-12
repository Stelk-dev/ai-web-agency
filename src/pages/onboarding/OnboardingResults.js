import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../style/onboarding.css";

export default function OnboardingResults({ answers, onStartOver }) {
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
        title: "Custom AI Development",
        description:
          "We'll build a tailored AI solution from the ground up, designed specifically for your business needs and requirements.",
        icon: "🛠️",
      });
    }

    if (questionOne.includes("consulting")) {
      recommendations.push({
        title: "AI Strategy Consulting",
        description:
          "Our experts will analyze your business and create a comprehensive AI roadmap to maximize your competitive advantage.",
        icon: "💡",
      });
    }

    if (questionOne.includes("integration")) {
      recommendations.push({
        title: "AI Integration Services",
        description:
          "Seamlessly integrate AI capabilities into your existing systems without disrupting your current operations.",
        icon: "🔗",
      });
    }

    if (questionOne.includes("training")) {
      recommendations.push({
        title: "AI Training & Upskilling",
        description:
          "Comprehensive training programs to elevate your team's AI knowledge and implementation capabilities.",
        icon: "📚",
      });
    }

    // Add size-specific recommendations
    if (questionTwo === "startup") {
      recommendations.push({
        title: "Startup AI Package",
        description:
          "Cost-effective AI solutions designed to scale with your growing business and limited initial budget.",
        icon: "🚀",
      });
    } else if (questionTwo === "large") {
      recommendations.push({
        title: "Enterprise AI Platform",
        description:
          "Comprehensive, scalable AI infrastructure designed for large-scale enterprise deployment and management.",
        icon: "🏢",
      });
    }

    return recommendations;
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
          <h2 className="success-title">Thank you!</h2>
          <p className="success-message">
            We've received your information and our team will contact you within
            24 hours with personalized recommendations based on your needs.
          </p>
          <button onClick={onStartOver} className="btn-back">
            Start Over
          </button>
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
            Your Personalized Recommendations
          </div>

          <h2 className="results-title">
            Perfect! Here's what we recommend for you
          </h2>

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
            Let's connect and discuss your project
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="Your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Additional details (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Tell us more about your project..."
              />
            </div>

            {error && <div className="form-error">{error}</div>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="form-submit"
            >
              {isSubmitting ? "Sending..." : "Get My Personalized Consultation"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
