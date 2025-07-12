import React, { useEffect, useState, useRef } from "react";
// Import the correct browser version of EmailJS
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "../style/onboarding.css";

// Import onboarding components
import OnboardingIntro from "./onboarding/OnboardingIntro";
import QuestionOne from "./onboarding/QuestionOne";
import QuestionTwo from "./onboarding/QuestionTwo";
import QuestionThree from "./onboarding/QuestionThree";
import OnboardingResults from "./onboarding/OnboardingResults";

export default function ContactUs() {
  const [t] = useTranslation("global");
  // Onboarding flow state
  const [currentStep, setCurrentStep] = useState("intro"); // intro, question1, question2, question3, results, traditional
  const [answers, setAnswers] = useState({});

  // Traditional form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Initialize EmailJS (optional if you're using the newer version)
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  // Onboarding flow handlers
  const handleStartOnboarding = () => {
    setCurrentStep("question1");
  };

  const handleQuestionOneNext = (questionOneAnswers) => {
    setAnswers((prev) => ({ ...prev, ...questionOneAnswers }));
    setCurrentStep("question2");
  };

  const handleQuestionTwoNext = (questionTwoAnswers) => {
    setAnswers((prev) => ({ ...prev, ...questionTwoAnswers }));
    setCurrentStep("question3");
  };

  const handleQuestionThreeNext = (questionThreeAnswers) => {
    setAnswers((prev) => ({ ...prev, ...questionThreeAnswers }));
    setCurrentStep("results");
  };

  const handleBackToQuestionOne = () => {
    setCurrentStep("question1");
  };

  const handleBackToQuestionTwo = () => {
    setCurrentStep("question2");
  };

  const handleBackToIntro = () => {
    setCurrentStep("intro");
  };

  const handleSkipToTraditional = () => {
    setCurrentStep("traditional");
  };

  // Traditional form handlers
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

    // Using the browser version of EmailJS
    emailjs
      .sendForm(
        "service_l86qclt",
        "template_6xfchin",
        formRef.current,
        "L7ua-WuLwhYL-Ji9Z"
      )
      .then((result) => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset the success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setError("Failed to send the message. Please try again later.");
        console.error("EmailJS error:", error);
      });
  };

  // Render different components based on current step
  if (currentStep === "intro") {
    return (
      <OnboardingIntro
        onStart={handleStartOnboarding}
        onSkipToTraditional={handleSkipToTraditional}
      />
    );
  }

  if (currentStep === "question1") {
    return (
      <QuestionOne onNext={handleQuestionOneNext} onBack={handleBackToIntro} />
    );
  }

  if (currentStep === "question2") {
    return (
      <QuestionTwo
        onNext={handleQuestionTwoNext}
        onBack={handleBackToQuestionOne}
      />
    );
  }

  if (currentStep === "question3") {
    return (
      <QuestionThree
        onNext={handleQuestionThreeNext}
        onBack={handleBackToQuestionTwo}
      />
    );
  }

  if (currentStep === "results") {
    return <OnboardingResults answers={answers} />;
  }

  // Traditional contact form (fallback)
  return (
    <div className="onboarding-container traditional-contact">
      <div className="traditional-contact__content">
        <h1 className="traditional-contact__title">
          {t("contact_page.title")}
        </h1>
        <p className="traditional-contact__subtitle">
          {t("contact_page.subtitle")}
        </p>

        <button
          onClick={() => setCurrentStep("intro")}
          className="btn-secondary"
        >
          {t("contact_page.try_recommendations")}
        </button>
      </div>

      {isSubmitted ? (
        <div className="traditional-success">
          <h2 className="traditional-success__title">
            {t("contact_page.thank_you_title")}
          </h2>
          <p className="traditional-success__message">
            {t("contact_page.thank_you_message")}
          </p>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="traditional-form"
        >
          <div className="traditional-form__content">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                {t("contact_page.form.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder={t("contact_page.form.name_placeholder")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                {t("contact_page.form.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder={t("contact_page.form.email_placeholder")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                {t("contact_page.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                placeholder={t("contact_page.form.message_placeholder")}
              />
            </div>

            {error && <div className="form-error">{error}</div>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="form-submit"
            >
              {isSubmitting
                ? t("contact_page.form.sending")
                : t("contact_page.form.send")}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
