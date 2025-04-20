import React, { useEffect, useState, useRef } from "react";
// Import the images directly
import nandLogo from "../../assets/NandGroup-logo.png";
import viralityLogo from "../../assets/Virality-logo.png";
import digitalLogo from "../../assets/Digital-logo.png";
import retailTuneLogo from "../../assets/Retailtune_logo.png";
import extraInfissiLogo from "../../assets/ExtraInfissi-logo.png";
import supremMilkLogo from "../../assets/SupremMilk-logo.png";

const ReviewersLogosSlider = () => {
  const carouselRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [logoSetWidth, setLogoSetWidth] = useState(0);

  // Use the imported logos
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const logos = [
    { id: 1, src: nandLogo, alt: "Nand Group" },
    { id: 2, src: viralityLogo, alt: "Virality" },
    { id: 3, src: digitalLogo, alt: "Digital" },
    { id: 4, src: retailTuneLogo, alt: "RetailTune" },
    { id: 5, src: extraInfissiLogo, alt: "Extra Infissi" },
    { id: 6, src: supremMilkLogo, alt: "SupremMilk" },
  ];

  // Create duplicated array for infinite scrolling
  const [extendedLogos, setextendedLogos] = useState([
    ...logos,
    ...logos,
    ...logos,
  ]);

  // Responsive logo spacing based on container width
  useEffect(() => {
    const updateDimensions = () => {
      if (carouselRef.current && carouselRef.current.parentElement) {
        const containerWidth = carouselRef.current.parentElement.offsetWidth;
        setContainerWidth(containerWidth);

        // Calculate how many logos should be visible at once based on container width
        const logosPerView = Math.max(3, Math.floor(containerWidth / 180));
        const spacing = Math.max(120, containerWidth / logosPerView - 60);

        // Calculate total width of one set of logos
        const totalWidth = extendedLogos.length * spacing;
        setLogoSetWidth(totalWidth);
      }
    };

    // Initial calculation
    updateDimensions();

    // Update on resize
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [extendedLogos]);

  useEffect(() => {
    if (!logoSetWidth) return;

    const scrollAnimation = () => {
      setTranslateX((prev) => {
        // When we've scrolled past the first set of logos, reset position
        if (prev <= -logoSetWidth) {
          // Reset to the starting position
          setextendedLogos((prevLogos) => [...logos, ...prevLogos]);
        }

        // Continue scrolling left with 25% increased speed (1.25 pixels per frame instead of 1)
        return prev - 1.25;
      });
    };

    // Smooth scrolling animation - adjust interval for speed (75ms instead of 100ms for 25% increase)
    const scrollInterval = setInterval(scrollAnimation, 75);

    return () => clearInterval(scrollInterval);
  }, [logoSetWidth]);

  // Calculate responsive spacing
  const getResponsiveSpacing = () => {
    if (containerWidth === 0) return 180;

    const logosPerView = Math.max(3, Math.floor(containerWidth / 180));
    return Math.max(120, containerWidth / logosPerView - 60);
  };

  const logoSpacing = getResponsiveSpacing();

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "black",
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
              margin: `0 ${logoSpacing / 4}px`,
              height: "60px",
              display: "inline-flex",
              minWidth: `${logoSpacing / 2}px`, // Ensure minimum width for logos
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                height: "100%",
                width: "auto",
                maxWidth: `${logoSpacing * 2}px`, // Maximum width to prevent overlap
                objectFit: "contain",
                color: "#0a1a4d",
                opacity: 1,
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
