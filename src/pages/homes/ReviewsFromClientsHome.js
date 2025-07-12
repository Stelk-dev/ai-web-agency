import React, { useState, useEffect } from "react";
import { FadeInSection } from "../../components/FadeInSection";
import { useTranslation } from "react-i18next";
import "../../style/testimonial-grid.css";

// Hook to get translated testimonials
const useTestimonials = () => {
  const { t } = useTranslation("global");

  return [
    {
      id: 1,
      name: t("testimonials.reviews.giuseppe_sartori.name"),
      text: t("testimonials.reviews.giuseppe_sartori.text"),
      company: t("testimonials.reviews.giuseppe_sartori.company"),
    },
    {
      id: 2,
      name: t("testimonials.reviews.davide_laterza.name"),
      text: t("testimonials.reviews.davide_laterza.text"),
      company: t("testimonials.reviews.davide_laterza.company"),
    },
    {
      id: 3,
      name: t("testimonials.reviews.luigi_simonetti.name"),
      text: t("testimonials.reviews.luigi_simonetti.text"),
      company: t("testimonials.reviews.luigi_simonetti.company"),
    },
    {
      id: 4,
      name: t("testimonials.reviews.luca_corradini.name"),
      text: t("testimonials.reviews.luca_corradini.text"),
      company: t("testimonials.reviews.luca_corradini.company"),
    },
    {
      id: 5,
      name: t("testimonials.reviews.michele_lombardi.name"),
      text: t("testimonials.reviews.michele_lombardi.text"),
      company: t("testimonials.reviews.michele_lombardi.company"),
    },
    {
      id: 6,
      name: t("testimonials.reviews.alessandro_lodi.name"),
      text: t("testimonials.reviews.alessandro_lodi.text"),
      company: t("testimonials.reviews.alessandro_lodi.company"),
    },
    {
      id: 7,
      name: t("testimonials.reviews.robert_miller.name"),
      text: t("testimonials.reviews.robert_miller.text"),
      company: t("testimonials.reviews.robert_miller.company"),
    },
    {
      id: 8,
      name: t("testimonials.reviews.jessica_davis.name"),
      text: t("testimonials.reviews.jessica_davis.text"),
      company: t("testimonials.reviews.jessica_davis.company"),
    },
    {
      id: 9,
      name: t("testimonials.reviews.william_wilson.name"),
      text: t("testimonials.reviews.william_wilson.text"),
      company: t("testimonials.reviews.william_wilson.company"),
    },
  ];
};

const TestimonialBox = ({ testimonial, opacity }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "350px",
        borderRadius: "8px",
        opacity: 1.0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          padding: "1.5rem",
          textAlign: "center",
          color: "white",
          maxWidth: "300px",
        }}
      >
        <div style={{ color: "#FFD700" }}>★ ★ ★ ★ ★</div>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            margin: "0.5rem 0 1rem 0",
          }}
        >
          {testimonial.name}
        </h2>

        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.5",
            fontWeight: "200",
            margin: "0 0 1rem 0",
            color: "#999",
            fontStyle: "italic",
            display: "-webkit-box",
            WebkitLineClamp: "6",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {testimonial.text}
        </p>

        <div
          style={{
            border: "1px solid white",
            padding: "6px 12px",
            borderRadius: "32px",
            marginTop: "auto",
          }}
        >
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            {testimonial.company}
          </span>
        </div>
      </div>
    </div>
  );
};

const TestimonialGrid = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const testimonials = useTestimonials();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // No opacity effect - all testimonials at full opacity
  const getOpacity = () => {
    return 1.0; // Full opacity for all testimonials
  };

  // Show all testimonials on larger screens, but only 6 on smaller screens
  const limitedTestimonials =
    windowWidth < 1000 ? testimonials.slice(0, 6) : testimonials;

  return (
    <div className="testimonial-grid">
      {limitedTestimonials.map((testimonial, index) => (
        <TestimonialBox
          key={testimonial.id}
          testimonial={testimonial}
          opacity={getOpacity(index)}
        />
      ))}
    </div>
  );
};

export default function ReviewsFromClientsHome() {
  const [t] = useTranslation("global");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <div className="main-v">
        <div className="main-paragh">
          <h1 className="main-paragh-h1">{t("testimonials.title")}</h1>
          <p className="main-paragh-desc">{t("testimonials.description")}</p>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div
          className="main-v full-v"
          style={{
            padding: "40px 0px",
            position: "relative",
            overflow: "hidden",
            // Add a fade-out mask from top (opaque) to bottom (transparent)
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
          }}
        >
          {/* Overlay with gradient opacity from top to bottom */}
          <TestimonialGrid />
        </div>

        <FadeInSection>
          <div className="center-div">
            <h1
              style={{
                fontWeight: "500",
                fontSize: "70px",
                height: "fit-content",
                margin: "0px",
                textAlign: "center",
                color: "white",
                position: "absolute",
                bottom: 12,
                width: "100%",
              }}
            >
              {t("testimonials.happy_clients")}
            </h1>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
