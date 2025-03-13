import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
        gap: "50px",
        margin: "32px",
      }}
    >
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
        to="/about"
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
