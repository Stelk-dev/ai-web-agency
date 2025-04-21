import React from "react";

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
  // Adding 4 more testimonials to fill the 3x3 grid
  {
    id: 6,
    name: "Sofia Moretti",
    text: '"The innovative AI solutions provided by Ankor have completely revolutionized how we approach data analysis. Their team was professional, knowledgeable, and dedicated to our success."',
    company: "TECHINNO",
  },
  {
    id: 7,
    name: "Roberto Conti",
    text: '"Working with Ankor has been a game-changer for our business. Their expertise in AI implementation helped us automate processes we thought were impossible to streamline."',
    company: "FUTURETECH",
  },
  {
    id: 8,
    name: "Elena Marino",
    text: "\"Ankor's team didn't just provide us with technology solutions, they became strategic partners in our growth. Their AI expertise translated directly to measurable business outcomes.\"",
    company: "SKYDATA",
  },
  {
    id: 9,
    name: "Paolo Romano",
    text: '"The level of technical expertise and industry knowledge at Ankor is outstanding. They delivered an AI solution that perfectly addressed our unique challenges and exceeded our expectations."',
    company: "NEXTSYS",
  },
  // Adding 4 more testimonials to fill the 3x3 grid
  {
    id: 6,
    name: "Sofia Moretti",
    text: '"The innovative AI solutions provided by Ankor have completely revolutionized how we approach data analysis. Their team was professional, knowledgeable, and dedicated to our success."',
    company: "TECHINNO",
  },
  {
    id: 7,
    name: "Roberto Conti",
    text: '"Working with Ankor has been a game-changer for our business. Their expertise in AI implementation helped us automate processes we thought were impossible to streamline."',
    company: "FUTURETECH",
  },
  {
    id: 8,
    name: "Elena Marino",
    text: "\"Ankor's team didn't just provide us with technology solutions, they became strategic partners in our growth. Their AI expertise translated directly to measurable business outcomes.\"",
    company: "SKYDATA",
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
  // No opacity effect - all testimonials at full opacity
  const getOpacity = () => {
    return 1.0; // Full opacity for all testimonials
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "20px",
        width: "100%",
      }}
    >
      {testimonials.map((testimonial, index) => (
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
          <h1 className="main-paragh-h1">What our clients says</h1>
          <p className="main-paragh-desc">
            At Algorithmx, we bring together a decade of AI engineering,
            software development, and enterprise consulting experience to help
            you cut through the noise and transform possibilities into practical
            solutions.
          </p>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div
          className="main-v full-v"
          style={{
            padding: "40px 20px",
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
            Over hundreds of happy clients
          </h1>
        </div>
      </div>
    </div>
  );
}
