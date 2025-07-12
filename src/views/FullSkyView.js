import React, { useEffect, useRef } from "react";

const SpaceGradientBackground = ({
  starsNumber = 150,
  glowingStarsNumber = 15,
  backgroundColorBlack = false,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Stars array to track positions and movement
    const stars = [];
    const glowingStars = [];

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeStars();
      drawBackground();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function initializeStars() {
      // Clear previous stars
      stars.length = 0;
      glowingStars.length = 0;

      // Regular stars with fading properties
      for (let i = 0; i < starsNumber; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          opacity: Math.random() * 0.7,
          speed: Math.random() * 0.4, // Movement speed
          direction: Math.random() * Math.PI * 2,
          // Fading properties
          fadeSpeed: Math.random() * 0.005 + 0.002, // Slow fade speed
          fadingOut: Math.random() > 0.5, // Random initial fade direction
          minOpacity: Math.random() * 0.2, // Minimum opacity when faded out
          maxOpacity: Math.random() * 0.8, // Maximum opacity when faded in
        });
      }

      // Glowing stars
      for (let i = 0; i < glowingStarsNumber; i++) {
        glowingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speed: Math.random() * 0.4 + 0.3, // Faster than regular stars
          direction: Math.random() * Math.PI * 2,
        });
      }
    }

    function drawBackground() {
      // Create gradient background from black to deep blue
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      if (backgroundColorBlack) gradient.addColorStop(0, "#000000");

      if (!backgroundColorBlack) {
        gradient.addColorStop(0.4, "#050523");
        gradient.addColorStop(0.8, "#0a1a4d");
        gradient.addColorStop(1, "#0a3677");
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function updateAndDrawStars() {
      // Update and draw regular stars with fading
      stars.forEach((star) => {
        // Handle fading effect
        if (star.fadingOut) {
          star.opacity -= star.fadeSpeed;
          if (star.opacity <= star.minOpacity) {
            star.opacity = star.minOpacity;
            star.fadingOut = false;
          }
        } else {
          star.opacity += star.fadeSpeed;
          if (star.opacity >= star.maxOpacity) {
            star.opacity = star.maxOpacity;
            star.fadingOut = true;
          }
        }

        // Move star
        star.x += Math.cos(star.direction) * star.speed;
        star.y += Math.sin(star.direction) * star.speed;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Update and draw glowing stars
      glowingStars.forEach((star) => {
        // Move star
        star.x += Math.cos(star.direction) * star.speed;
        star.y += Math.sin(star.direction) * star.speed;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Create glow effect
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.radius * 5
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(0.3, "rgba(200, 220, 255, 0.4)");
        gradient.addColorStop(1, "rgba(255, 200, 200, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 5, 0, Math.PI * 2);
        ctx.fill();

        // Star center
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fill();
      });
    }

    // Animation loop
    let animationFrameId;

    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Redraw background and shapes (they stay static)
      drawBackground();

      // Update and draw stars
      updateAndDrawStars();

      // Continue animation loop
      animationFrameId = requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default SpaceGradientBackground;
