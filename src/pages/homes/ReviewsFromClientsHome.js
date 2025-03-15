import React, { useState, useEffect, useRef } from "react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Marco Rossi",
    text: '"Stefano was a fantastic addition to Katoo. His passion for coding, openness to feedback, willingness to learn new things and friendliness stood out. It was a pleasure working with Stefano, I\'m sure he would be an amazing addition to any team."',
    company: "DATADOTS",
  },
  {
    id: 2,
    name: "Giulia Bianchi",
    text: '"Working with Ankor was transformative for our business. Their AI solutions helped us reduce operational costs by 30% while increasing customer satisfaction. The team\'s expertise and responsiveness exceeded our expectations."',
    company: "RETAILTUNE",
  },
  {
    id: 3,
    name: "Alessandro Verdi",
    text: '"The team at Ankor delivered exceptional results on our AI implementation project. Their ability to understand our unique business challenges and develop custom solutions made all the difference. Highly recommended!"',
    company: "VIRALITY",
  },
  {
    id: 4,
    name: "Francesca Russo",
    text: '"Ankor helped us navigate the complex world of AI with ease. Their approach is both technical and practical, ensuring we got solutions that work in the real world, not just in theory. We\'ve seen a remarkable ROI already."',
    company: "NANDGROUP",
  },
  {
    id: 5,
    name: "Leonardo Ricci",
    text: '"From our first meeting, the Ankor team demonstrated a deep understanding of our industry challenges. Their AI solution has streamlined our processes and given us valuable insights we never had before."',
    company: "DIGITAL",
  },
];

const TestimonialBox = ({ testimonial }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "340px",
        height: "400px",
        backgroundColor: "#0a0a0a",
        margin: "0 20px",
        flex: "0 0 auto",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
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
        <div>★ ★ ★ ★ ★</div>
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

      <div style={{}} />
    </div>
  );
};

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  const itemWidth = 380; // Width of each item (340px + 40px margin)

  // Creating a doubled list for infinite scrolling effect
  const doubledTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalWidth = testimonials.length * itemWidth;
    const scrollAnimation = () => {
      setTranslateX((prev) => {
        if (prev < -totalWidth) return 0;
        // Continue scrolling left
        return prev - 1;
      });
    };

    // Smooth scrolling animation - adjust interval for speed
    const scrollInterval = setInterval(
      scrollAnimation,
      doubledTestimonials.length * 10
    );

    return () => clearInterval(scrollInterval);
  }, []);
  console.log(translateX);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={carouselRef}
        style={{
          display: "flex",
          transform: `translateX(${translateX}px)`,
          transition: "transform 10s linear",
          width: "max-content", // Allow content to extend beyond container
        }}
      >
        {doubledTestimonials.map((testimonial, index) => (
          <TestimonialBox
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default function ReviewsFromClientsHome() {
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
          <h1 className="main-paragh-h1">What our clients think:</h1>
          <p className="main-paragh-desc">
            At Algorithmx, we bring together a decade of AI engineering,
            software development, and enterprise consulting experience to help
            you cut through the noise and transform possibilities into practical
            solutions.{" "}
          </p>
        </div>
      </div>

      <div
        className="main-v full-v"
        style={{
          backgroundColor: "black",
          boxShadow: "0 0px 40px 20px #00000066",
          border: "1px solid #F7F7F722",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 0",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}
