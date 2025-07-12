import React, { useEffect, useState, useRef } from "react";
// Import the correct browser version of EmailJS
import emailjs from "@emailjs/browser";
import "../style/onboarding.css";

// Import onboarding components
import OnboardingIntro from "./onboarding/OnboardingIntro";
import QuestionOne from "./onboarding/QuestionOne";
import QuestionTwo from "./onboarding/QuestionTwo";
import OnboardingResults from "./onboarding/OnboardingResults";

export default function ContactUs() {
  // Onboarding flow state
  const [currentStep, setCurrentStep] = useState("intro"); // intro, question1, question2, results, traditional
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
    setCurrentStep("results");
  };

  const handleBackToQuestionOne = () => {
    setCurrentStep("question1");
  };

  const handleBackToIntro = () => {
    setCurrentStep("intro");
  };

  const handleStartOver = () => {
    setCurrentStep("intro");
    setAnswers({});
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

  if (currentStep === "results") {
    return (
      <OnboardingResults answers={answers} onStartOver={handleStartOver} />
    );
  }

  // Traditional contact form (fallback)
  return (
    <div className="onboarding-container traditional-contact">
      <div className="traditional-contact__content">
        <h1 className="traditional-contact__title">Get in touch</h1>
        <p className="traditional-contact__subtitle">
          Have a question or want to discuss a project? Fill out the form below,
          and our team will get back to you within 24 hours.
        </p>

        <button
          onClick={() => setCurrentStep("intro")}
          className="btn-secondary"
        >
          Or try our quick personalized recommendations (15 seconds)
        </button>
      </div>

      {isSubmitted ? (
        <div className="traditional-success">
          <h2 className="traditional-success__title">Thank you!</h2>
          <p className="traditional-success__message">
            Your message has been sent successfully. We'll get back to you
            within 24 hours.
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
                Name
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
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                placeholder="Tell us about your project or question"
              />
            </div>

            {error && <div className="form-error">{error}</div>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="form-submit"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
