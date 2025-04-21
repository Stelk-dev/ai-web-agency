import React, { useEffect, useState, useRef } from "react";
// Import the correct browser version of EmailJS
import emailjs from "@emailjs/browser";

export default function ContactUs() {
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
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
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

  return (
    <div
      className="center-div"
      style={{
        minHeight: "100vh",
        width: "100%",
        color: "white",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
          }}
        >
          Get in touch
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "#e0e0e0",
          }}
        >
          Have a question or want to discuss a project? Fill out the form below,
          and our team will get back to you within 24 hours.
        </p>
      </div>

      {isSubmitted ? (
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            padding: "30px",
            maxWidth: "500px",
            width: "100%",
            textAlign: "center",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
            Thank you!
          </h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.5" }}>
            Your message has been sent successfully. We'll get back to you
            within 24 hours.
          </p>
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            maxWidth: "600px",
            width: "100%",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            style={{
              padding: "30px",
            }}
          >
            <div
              style={{
                marginBottom: "20px",
                width: "100%",
              }}
            >
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "calc(100% - 30px)",
                  padding: "12px 15px",
                  fontSize: "1rem",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "4px",
                  color: "white",
                  outline: "none",
                }}
                placeholder="Your name"
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "calc(100% - 30px)",
                  padding: "12px 15px",
                  fontSize: "1rem",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "4px",
                  color: "white",
                  outline: "none",
                }}
                placeholder="Your email address"
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: "calc(100% - 30px)",
                  padding: "12px 15px",
                  fontSize: "1rem",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "4px",
                  minHeight: "150px",
                  color: "white",
                  resize: "none",
                  outline: "none",
                }}
                placeholder="Tell us about your project or question"
              />
            </div>

            {error && (
              <div
                style={{
                  color: "#ff8a8a",
                  marginBottom: "20px",
                  fontSize: "0.9rem",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "14px",
                fontSize: "1rem",
                fontWeight: "600",
                backgroundColor: "#2d72e1",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "background-color 0.3s ease",
                opacity: isSubmitting ? 0.7 : 1,
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
