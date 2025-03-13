import React, { useEffect, useState, useRef } from "react";
// Import the images directly
import nandLogo from "../../assets/NandGroup-logo.png";
import viralityLogo from "../../assets/Virality-logo.png";
import digitalLogo from "../../assets/Digital-logo.png";
import retailTuneLogo from "../../assets/Retailtune_logo.png";
import extraInfissiLogo from "../../assets/ExtraInfissi-logo.png";

const ReviewersLogosSlider = ({ images, speed = 0.4 }) => {
  const containerRef = useRef(null);
  const [imageItems, setImageItems] = useState([]);
  const animationRef = useRef(null);
  // Use the imported images
  const displayImages = [
    nandLogo,
    viralityLogo,
    retailTuneLogo,
    extraInfissiLogo,
    digitalLogo,
  ];

  // Initialize image items with positions and other properties
  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;

    // Create initial image items with random positions
    const items = displayImages.map((src, index) => {
      // Space images out evenly across container width at first
      const spacing = containerWidth / displayImages.length;

      return {
        id: `img-${index}`,
        src,
        x: index * spacing,
        width: 0, // Will be measured after rendering
        loaded: false,
      };
    });

    setImageItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // After initial render, measure image widths and start animation
  useEffect(() => {
    if (!containerRef.current || imageItems.length === 0) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;

    // Update image widths after they've rendered
    const updatedItems = [...imageItems];
    let allImagesLoaded = true;

    imageItems.forEach((item, index) => {
      const imgElement = document.getElementById(item.id);
      if (imgElement) {
        const imgWidth = imgElement.offsetWidth;
        updatedItems[index] = {
          ...item,
          width: imgWidth,
          loaded: true,
        };
      } else {
        allImagesLoaded = false;
      }
    });

    if (allImagesLoaded) {
      setImageItems(updatedItems);

      // Start animation once widths are measured
      const animate = () => {
        setImageItems((prevItems) => {
          return prevItems.map((item) => {
            // Move image to the left
            let newX = item.x - speed;

            // If image has moved completely off the left edge
            if (newX < -item.width - 20) {
              // -20 accounts for margin
              // Move it back to the right edge of the container
              newX = containerWidth;
            }

            return {
              ...item,
              x: newX,
            };
          });
        });

        animationRef.current = requestAnimationFrame(animate);
      };

      // Start animation loop
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [imageItems, speed]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100px",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#00000033",
      }}
    >
      {imageItems.map((item) => (
        <div
          key={item.id}
          id={item.id}
          style={{
            position: "absolute",
            left: `${item.x}px`,
            top: "50%",
            transform: "translateY(-50%)",
            height: "60px",
            display: "inline-flex",
            transition: "none",
          }}
        >
          <img
            src={item.src}
            alt={`Slide ${item.id}`}
            style={{
              height: "100%",
              width: "auto",
              objectFit: "contain",
              color: "#0a1a4d",
              opacity: 0.8,
              filter: "brightness(0) invert(1)", // Makes images completely white
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ReviewersLogosSlider;
