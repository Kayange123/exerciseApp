import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import React from "react";
import logo from "../../assets/images/Logo.png";
import "./styles.css";

const Navbar = () => {
  return (
    <Stack direction="row">
      <Link to="/">
        <img src={logo} alt="logo" className="logo-img" />
      </Link>
      <Stack>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <a href="#exercise" className="nav-link">
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
