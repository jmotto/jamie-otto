import { Box, Button, Card, Link, Stack, Typography } from "@mui/material";
// import { Container } from "@mui/system";
import React from "react";
import MyResume from "../images/resume_screenshot.png";

export const Resume = () => {
  return (
    <Box container id="resume">

        {/* <Card>
          <Typography variant="3">Skills</Typography>
        </Card> */}

        <Stack
          direction="column"
          display="flex-wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Card>
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
         
        </Stack>
    
    </Box>
  );
};
