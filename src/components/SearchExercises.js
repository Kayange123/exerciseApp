import React from "react";
import "./styles.css";
//import { Box, Stack, Button, Typography, TextField } from "@mui/material";

const SearchExercises = () => {
  return (
    <div className="exercises container">
      <p className="head-text title" variant="h3">
        Awesome Exercises you should know
      </p>
      <div className="box-center">
        <input
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercise..."
          type="search"
        />
        <button className="btn-search">Search</button>
      </div>
    </div>
  );
};

export default SearchExercises;
