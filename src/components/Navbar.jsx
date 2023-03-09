import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-evenly",
  palette: {
    primary: {
      main: '#004d40',
    },
    secondary: {
      main: '#b9f6ca',
    },
  },
  

 
})


  
export default function Navbar() {

  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (


      <AppBar position="sticky">
        <StyledToolbar>
        <Tabs value={value} onChange={handleChange} >
          <Tab value="Home" label="Home" href='#home' onClick={()=> handleChange('Home')}/>
          <Tab value="About" label="About" href='#about' onClick={()=> handleChange('About')}/>
          <Tab value="Portfolio" label="Portfolio" href="#portfolio" onClick={()=> handleChange('Portfolio')}/>
          <Tab value="Resume" label="Resume" href="#resume" onClick={()=> handleChange('Resume')}/>
          <Tab value="Contact" label="Contact" href="#contact" onClick={()=> handleChange('Contact')}/>
        </Tabs>
        </StyledToolbar>
      
      </AppBar>
    
    );
  };

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