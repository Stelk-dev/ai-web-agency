import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/navbar.css";
import Logo from "../assets/AppLogo2.png"; // Make sure this path matches your logo file
import WhiteButton from "./WhiteButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nav = useNavigate();

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    nav("/");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
      <div className="nav-logo">
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Center: Navigation - Desktop */}
      <div className={`nav-center ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <Link to="/" onClick={closeMobileMenu}>
          Home
        </Link>
        <Link to="/services" onClick={closeMobileMenu}>
          Services
        </Link>
        {/* <Link to="/about">About</Link> */}
        <Link to="/use-cases" onClick={closeMobileMenu}>
          Cases
        </Link>

        {/* Mobile-only button */}
        <div className="mobile-contact-button">
          <WhiteButton style={{ margin: "20px 0" }} />
        </div>
      </div>

      {/* Right: Contact Us Button - Desktop only */}
      <div className="nav-right">
        <WhiteButton style={{ marginTop: "0px", marginRight: "20px" }} />
      </div>
    </nav>
  );
};

export default Navbar;
