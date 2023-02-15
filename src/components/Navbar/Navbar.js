import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import React from "react";
import logo from "../../assets/images/Logo.png";
import "./styles.css";

const Navbar = () => {
  return (
    <Stack className="nav-container" direction="row">
      <Link to="/">
        <img src={logo} alt="logo" className="logo-img" />
      </Link>
      <Stack direction="row" gap="40px" className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <a href="#exercises" className="nav-link">
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
