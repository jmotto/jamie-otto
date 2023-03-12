import {
  Box,
  CardContent,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import React from "react";
import MyPhoto from "../images/Otto.JPG";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { Stack } from "@mui/system";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";

export default function About() {
  return (
    <Box
      container
      display="flex"
      justifyContent="center"
      bgcolor="#004d40"
      id="about"
    >
      <CardContent  >
        <Stack
          xs={12}
          md={4}
          direction="row"
          display="flex"
          justifyContent="center"
          alignItems="center"
          spacing="3em"
          marginTop="2em"
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
            Hello! My name is Jamie Otto, and I'm a Full Stack Developer
            residing in Tacoma, Washington. With my proficiency in web
            technologies, including HTML, CSS, SQL, JavaScript, React, Node, and
            Express, I've developed a comprehensive understanding of
            software development. When not immersed in code, I enjoy bonding
            with my loved ones and embarking on outdoor adventures.
          </Typography>
        </Stack>
        <Grid item xs={12} md={4} >
        
          <Grid container direction="row" display="flex" alignItems="center" spacing="-30em">
            <Grid item xs={3}>
              <DiJavascript1 color="b9f6ca" size={30} />
            </Grid>
            <Grid item xs={3}>
              <FaReact color="b9f6ca" size={30} />
            </Grid>
            <Grid item xs={3}>
              <DiMongodb color="#b9f6ca" size={30} />
            </Grid>
            <Grid item xs={3}>
              <FaNodeJs color="b9f6ca" size={30} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Box>
  );
}
