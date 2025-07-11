import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  return (
    <nav style={navbarStyle}>
      {/* Left: Logo + Title */}
      <div style={leftSection}>
        {/* 👇 Logo moved here */}
        <img
          src="data:image/png;base64,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"
          alt="Logo"
          style={logoStyle}
        />

        <Link to="/" style={brandStyle}>
          THE STYLE STUDIO
        </Link>
      </div>

      {/* Right: Cart */}
      <div style={rightSection}>
        <Link to="/cart" style={navLinkStyle}>
          🛒 Cart
        </Link>
      </div>
    </nav>
  );
};

const navbarStyle = {
  background: "lavender",
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
};

const leftSection = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginLeft: "500px", // Adjust if needed
};

const rightSection = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginRight: "30px",
};

const logoStyle = {
  width: "32px",
  height: "32px",
  marginLeft: "10px"
};

const brandStyle = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#6a1b9a",
  textDecoration: "none",
};

const navLinkStyle = {
  fontSize: "16px",
  textDecoration: "none",
  color: "#6a1b9a",
  fontWeight: "500",
};

export default Navbar;
