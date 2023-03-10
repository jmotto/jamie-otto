import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { Stack } from "@mui/material";
import About from "./components/About";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";

function App() {
  return (
    <div>
      <Stack>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </Stack>

      <Footer />
    </div>
  );
}
export default App;
