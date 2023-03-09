import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-evenly",
  bgcolor: '#3c3c3c',
  
  

 
})


  
export default function Navbar() {

  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (


      <AppBar position="sticky">
   
        <Tabs value={value} onChange={handleChange} 
          sx={{
            bgcolor: "#3c3c3c",
            color: '#e7e4e4',
            justifyContent: "center",
            display: "flex",
          }}>
          <Tab style={{color: '#e7e4e4'}} value="Home" label="Home" href='#home' onClick={()=> handleChange('Home')}/>
          <Tab style={{color: '#e7e4e4'}} value="About" label="About" href='#about' onClick={()=> handleChange('About')}/>
          <Tab style={{color: '#e7e4e4'}} value="Portfolio" label="Portfolio" href="#portfolio" onClick={()=> handleChange('Portfolio')}/>
          <Tab style={{color: '#e7e4e4'}} value="Resume" label="Resume" href="#resume" onClick={()=> handleChange('Resume')}/>
          <Tab style={{color: '#e7e4e4'}} value="Contact" label="Contact" href="#contact" onClick={()=> handleChange('Contact')}/>
        </Tabs>
 
      
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