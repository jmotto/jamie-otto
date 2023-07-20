import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { Grid, Stack } from "@mui/material";
import About from "./components/About";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";
import { useMediaQuery } from '@mui/material/useMediaQuery';

function App() {
  return (
  
    <Grid item xs={12} sm={4}  display="flex">
      <Stack>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
      </Stack>
    </Grid>
   
  );
}
export default App;
