import React, { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div
      style={{
        height: "1200px",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h1>Turning complexity into real-world results</h1>
        <p>
          Here are some of our most recent projects showcasing how we've helped
          organizations transform their challenges into competitive advantages
          through AI and data solutions.
        </p>
      </div>
    </div>
  );
}
