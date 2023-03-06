import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



export default function Navbar() {

    const [value, setValue] = React.useState();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (


      <Box sx={{ width: '100%', bgcolor:'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered textColor="secondary"
            indicatorColor="secondary">
          <Tab value="Home" label="Home" href='#home' onClick={()=> handleChange('Home')}/>
          <Tab value="portfolio" label="Portfolio" href="#portfolio" onClick={()=> handleChange('Portfolio')}/>
          <Tab value="resume" label="Resume" href="#resume" onClick={()=> handleChange('Resume')}/>
          <Tab value="contact" label="Contact" href="#contact" onClick={()=> handleChange('Contact')}/>
        </Tabs>
      </Box>
    );
  }
