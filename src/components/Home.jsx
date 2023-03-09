// import { Avatar, Card, CardContent } from "@mui/material";
import React from "react";
import { Typography, Box } from "@mui/material";
// import MyPhoto from '../images/Otto.JPG';
// import {FaReact, FaNodeJs} from 'react-icons/fa';
// import { DiJavascript1, DiMongodb} from 'react-icons/di'
// import { Stack } from "@mui/system";

export default function Home() {
  return (
    <Box bgcolor="#b9f6ca" padding="20px">
      <Typography
        sx={{
          color: "004d40",
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
        variant="h4"
      >
        Hello, I am Jamie Otto.
      </Typography>
    </Box>
  );
}
