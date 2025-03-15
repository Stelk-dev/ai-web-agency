import React, { useEffect, useState, useRef } from "react";
// Import the images directly
import nandLogo from "../../assets/NandGroup-logo.png";
import viralityLogo from "../../assets/Virality-logo.png";
import digitalLogo from "../../assets/Digital-logo.png";
import retailTuneLogo from "../../assets/Retailtune_logo.png";
import extraInfissiLogo from "../../assets/ExtraInfissi-logo.png";
import datadotsLogo from "../../assets/DataDots-logo.png";

const ReviewersLogosSlider = () => {
  const carouselRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  // Use the imported logos
  const logos = [
    { id: 1, src: nandLogo, alt: "Nand Group" },
    { id: 2, src: viralityLogo, alt: "Virality" },
    { id: 3, src: digitalLogo, alt: "Digital" },
    { id: 4, src: retailTuneLogo, alt: "RetailTune" },
    { id: 5, src: extraInfissiLogo, alt: "Extra Infissi" },
    { id: 6, src: datadotsLogo, alt: "DataDots" },
  ];

  // Create duplicated array for infinite scrolling
  const extendedLogos = [...logos, ...logos, ...logos];

  // Fixed spacing between logo items (adjust as needed)
  const logoSpacing = 180;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Calculate total width of the original logos set
    const totalWidth = logos.length * logoSpacing;

    const scrollAnimation = () => {
      setTranslateX((prev) => {
        // When we've scrolled past the first set of logos, reset position
        if (prev <= -totalWidth) {
          return 0;
        }
        // Continue scrolling left
        return prev - 1;
      });
    };

    // Smooth scrolling animation - adjust interval for speed
    const scrollInterval = setInterval(scrollAnimation, 100);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100px",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#00000033",
      }}
    >
      <div
        ref={carouselRef}
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          transform: `translateX(${translateX}px) translateY(-50%)`,
          transition: "transform 10s linear",
          width: "max-content", // Allow content to extend beyond container
        }}
      >
        {extendedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            style={{
              margin: "0 40px",
              height: "60px",
              display: "inline-flex",
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
                color: "#0a1a4d",
                opacity: 0.8,
                filter: "brightness(0) invert(1)", // Makes logos completely white
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewersLogosSlider;
