import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { AppBar } from "@mui/material";
import { useEffect } from "react";


function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function Navbar() {
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [value]);

  return (
    <AppBar position="sticky">
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          bgcolor: "#3c3c3c",
          color: "#e7e4e4",

        }}
      >
        <LinkTab
          style={{ color: "#e7e4e4" }}
          value="Home"
          label="Home"
          href="#home"
          onClick={() => handleChange("Home")}
        />
        <LinkTab
          style={{ color: "#e7e4e4" }}
          value="About"
          label="About"
          href="#about"
          onClick={() => handleChange("About")}
     
        />
        <LinkTab
          style={{ color: "#e7e4e4" }}
          value="Portfolio"
          label="Portfolio"
          href="#portfolio"
          onClick={() => handleChange("Portfolio")}
        />
        <LinkTab
          style={{ color: "#e7e4e4" }}
          value="Resume"
          label="Resume"
          href="#resume"
          onClick={() => handleChange("Resume")}
        />
        <LinkTab
          style={{ color: "#e7e4e4" }}
          value="Contact"
          label="Contact"
          href="#contact"
          onClick={() => handleChange("Contact")}
        />
      </Tabs>
    </AppBar>
  );
}

// export default function Navbar() {

//     const [value, setValue] = React.useState();

//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };

//   <Toolbar value={value} onChange={handleChange} centered textColor="secondary"
//   indicatorColor="secondary">
// <Tab value="Home" label="Home" href='#home' onClick={()=> handleChange('Home')}/>
// <Tab value="portfolio" label="Portfolio" href="#portfolio" onClick={()=> handleChange('Portfolio')}/>
// <Tab value="resume" label="Resume" href="#resume" onClick={()=> handleChange('Resume')}/>
// <Tab value="contact" label="Contact" href="#contact" onClick={()=> handleChange('Contact')}/>
// </Toolbar>

// return (
//   <header className="bg-gray-800 md:sticky top-0 z-10">
//     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//       {/* <a className="title-font font-medium text-white mb-4 md:mb-0"> */}
//         <a href="#about" className="ml-3 text-xl">
//           Jamie Otto
//         </a>
//       {/* </a> */}
//       <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
//         <a href="#projects" className="mr-5 hover:text-white">
//           My Work
//         </a>
//         <a href="#skills" className="mr-5 hover:text-white">
//           Skills
//         </a>
//         <a href="#resume" className="mr-5 hover:text-white">
//           Resume
//         </a>
//       </nav>
//       <a
//         href="#contact"
//         className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
//       >
//         Contact Me
//       </a>
//     </div>
//   </header>
