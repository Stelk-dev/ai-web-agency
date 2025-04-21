import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/navbar.css";
import Logo from "../assets/AppLogo2.png"; // Make sure this path matches your logo file
import WhiteButton from "./WhiteButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const nav = useNavigate();
  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    nav("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
      {/* Left: Logo */}
      <div
        style={{
          width: "300px",
          justifyContent: "start",
          display: "flex",
        }}
      >
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Center: Navigation */}
      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/use-cases">Cases</Link>
      </div>

      {/* Right: Contact Us Button */}
      <div
        style={{
          width: "300px",
          justifyContent: "end",
          display: "flex",
        }}
      >
        <WhiteButton style={{ marginTop: "0px", marginRight: "20px" }} />
      </div>
    </nav>
  );
};

export default Navbar;
