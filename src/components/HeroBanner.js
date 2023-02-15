import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import bannerImage from "../assets/images/banner1.jpg";
import "./styles.css";

const HeroBanner = () => {
  return (
    <Box className="hero-banner container">
      <Stack direction="column" className="banner-content">
        <Typography gutterBottom variant="h3" className="head-text">
          Fitness Club
        </Typography>
        <Typography fontSize={30} variant="body1" className="content">
          Sweat , Smile <br />
          <span> and Repeat</span>
        </Typography>
        <Typography mb={4} className="bottom-text" variant="subtitle1">
          Check out the most expensive exercises
        </Typography>
        <Button href="#exercises" className="btn" variant="contained">
          Explore exercises
        </Button>
      </Stack>
      <img className="banner-img" src={bannerImage} alt="banner" />
    </Box>
  );
};

export default HeroBanner;
