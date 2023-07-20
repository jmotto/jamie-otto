// import { Avatar, Card, CardContent } from "@mui/material";
import React from "react";
import { Typography, Box } from "@mui/material";
// import MyPhoto from '../images/Otto.JPG';
// import {FaReact, FaNodeJs} from 'react-icons/fa';
// import { DiJavascript1, DiMongodb} from 'react-icons/di'
// import { Stack } from "@mui/system";

export default function Home() {
  return (
    <Box id="home" bgcolor="#3c3c3c" padding="20px">
      <Typography
        sx={{
          color: "white",
          width: "100%",
          justifyContent: "center",
          display: "flex",
          // fontFamily: 'Tilt Prism',
          // border: 1,
         
        }}
        variant="h3"
  
      >
        Hello, I am Jamie Otto.
      </Typography>
      
    </Box>
  );
}


{/* <Grid item xs={12} md={4} >
        
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
</Grid> */}