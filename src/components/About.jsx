import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Link,
} from "@mui/material";
import React from "react";
import MyPhoto from "../images/Otto.JPG";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { Stack } from "@mui/system";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function About() {
  return (
    <Box container display="flex" justifyContent="center" bgcolor="#004d40">
      <CardContent display="flex" justifyContent="center">
        <Stack
          direction="row"
          display='flex'
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Avatar
            sx={{
              display: "flex",
              justifyContent: "center",
              width: 150,
              height: 150,
              marginBottom: 5,
            }}
            src={MyPhoto}
            alt="Me outside"
          />

          <Typography
            sx={{
              textAlign: "center",
              width: 500,
              height: 200,
              color: "white",
            }}
          >
            I am a full stack web developer with experience with web
            technologies such as HTML, CSS, databases, JavaScript, React, Node,
            and Express, GitHub. When I am not coding, I am spending time with
            my family and exploring nature. Contact me at jmotto.dev@gmail.com.
         
          <Link href="https://www.linkedin.com/in/jamie-otto-a913a018/" alt="linkedin profile">
                <LinkedInIcon />
            </Link>
            <Link href="https://github.com/jmotto" alt="github profile">
                <GitHubIcon/>
            </Link>
        </Typography>
        </Stack>
        <Grid item xs={12} md={3}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={3}>
              <DiJavascript1 color="b9f6ca" size={40} />
            </Grid>
            <Grid item xs={3}>
              <FaReact color="b9f6ca" size={40} />
            </Grid>
            <Grid item xs={3}>
              <DiMongodb color="#b9f6ca" size={40} />
            </Grid>
            <Grid item xs={3}>
              <FaNodeJs color="b9f6ca" size={40} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Box>
  );
}
