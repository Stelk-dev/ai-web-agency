import React from "react";
import "../style/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {/* Links */}
      <div style={{ width: "100%", height: "80%" }} className="footer-links">
        <div className="footer-column">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/cases">Cases</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social</h3>
          <ul>
            <li>
              <a href="https://youtube.com">Youtube</a>
            </li>
            <li>
              <a href="https://linkedin.com">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo / Copy */}
      <div style={{ width: "100%", height: "20%" }}></div>
    </div>
  );
}
