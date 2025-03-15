import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "300",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: "white",
          color: "white",
          fontWeight: "300",
        }}
      >
        About
      </Link>
      <Link
        to="/use-cases"
        style={{
          textDecoration: "white",
          color: "white",
          fontWeight: "300",
        }}
      >
        Use cases
      </Link>
    </nav>
  );
};

export default Navbar;
