import React, { useState, useEffect } from "react";
import { FadeInSection } from "../../components/FadeInSection";
import { useTranslation } from "react-i18next";
import "../../style/testimonial-grid.css";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Giuseppe Sartori",
    text: "Algorithmx delivered an AI-driven forecasting tool that significantly improved our inventory management. Their team understood our complex needs and provided a practical, high-quality solution that reduced waste and saved costs. Very professional and effective.",
    company: "GLOBAL LOGISTICS",
  },
  {
    id: 2,
    name: "Davide Laterza",
    text: "We needed to automate our customer support responses. Algorithmx developed a custom AI chatbot that handles inquiries efficiently, improving response times and customer satisfaction. Their expertise made the integration seamless.",
    company: "TECH SOLUTIONS INC.",
  },
  {
    id: 3,
    name: "Luigi Simonetti",
    text: "Algorithmx helped us analyze large datasets to identify key market trends. The insights gained from their AI model have been invaluable for our strategic planning. Their team provided clear explanations and excellent support throughout the project.",
    company: "INSIGHT ANALYTICS",
  },
  {
    id: 4,
    name: "Luca Corradini",
    text: "Our challenge was optimizing our production line. Algorithmx implemented an AI system that monitors operations and suggests improvements in real-time. We've seen a noticeable increase in efficiency thanks to their top-quality service.\"",
    company: "PRECISION MFG.",
  },
  {
    id: 5,
    name: "Michele Lombardi",
    text: "Algorithmx developed a predictive maintenance solution for our equipment, reducing downtime significantly. Their AI expertise helped us anticipate failures before they happened. A truly valuable partner for our operations.",
    company: "HEAVY INDUSTRY CO.",
  },
  {
    id: 6,
    name: "Alessandro Lodi",
    text: "We partnered with Algorithmx to enhance our fraud detection systems. The AI solution they built is highly accurate and has saved us substantial amounts by identifying suspicious activities quickly. Their team was knowledgeable and responsive.",
    company: "SECURE FINANCE",
  },
  {
    id: 7,
    name: "Robert Miller",
    text: "Algorithmx provided an AI solution to personalize our marketing campaigns. The results were impressive, with higher engagement rates and better conversion. Their approach was professional and focused on delivering tangible results.",
    company: "CONNECT MARKETING",
  },
  {
    id: 8,
    name: "Jessica Davis",
    text: "The AI-powered recommendation engine built by Algorithmx has greatly improved user experience on our platform. They understood our goals and delivered a high-quality system that drives user retention. Excellent work!",
    company: "ONLINE PLATFORMS LTD.",
  },
  {
    id: 9,
    name: "William Wilson",
    text: "Algorithmx helped us streamline our document processing using AI. What used to take days now takes hours. Their solution integrated perfectly with our existing systems. Highly recommend their top-quality AI services.",
    company: "ADMIN SOLUTIONS",
  },
  {
    id: 10,
    name: "Patricia Taylor",
    text: "We needed a better way to manage our supply chain risks. Algorithmx developed an AI model that analyzes various factors to predict potential disruptions. This foresight has been crucial for our business continuity. Great expertise!",
    company: "SUPPLY CHAIN MASTERS",
  },
  {
    id: 11,
    name: "Richard Anderson",
    text: "Algorithmx's AI solution for optimizing our energy consumption has led to significant cost savings. Their team provided a clear roadmap and executed flawlessly. A top-quality service provider in the AI space.\"",
    company: "ECO POWER CORP.",
  },
  {
    id: 12,
    name: "Susan Thomas",
    text: "Working with Algorithmx on developing an AI tool for talent acquisition simplified our hiring process. It helps us identify the best candidates faster. Their professional team delivered exactly what we needed.",
    company: "HR INNOVATE",
  },
];

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
