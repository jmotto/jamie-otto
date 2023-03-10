import { Button, Card, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MyResume from "../images/resume_screenshot.png";

export const Resume = () => {
  return (
    <Container id="resume">
      <Card display="flex" justifyContent="center">
        <img height="400px" src={MyResume} alt="resume" />
      </Card>

      <Link
        variant="h3"
        href="https://drive.google.com/file/d/1pIu89MjJthQWPu3YnlVM7C-wCINdcgdS/view?usp=sharing"
        alt="resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="contained" size="small">
          <Typography>Download my Resume</Typography>
        </Button>
      </Link>
    </Container>
  );
};
