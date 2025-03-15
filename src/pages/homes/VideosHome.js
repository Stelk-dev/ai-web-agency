import React from "react";

export default function VideosHome() {
  return (
    <div>
      <h1 style={{ fontWeight: 300, fontSize: "60px" }}>Ready to change?</h1>

      <iframe
        style={{
          width: "60vw",
          height: "60vh",
          border: "none",
          boxShadow: "0 0px 30px 2px #00000066",
        }}
        src="https://www.youtube.com/embed/Is2kTwmWrLY?start=450"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
