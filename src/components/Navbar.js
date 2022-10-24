import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const Navbar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', bgcolor:'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="About" href="#about" />
          <Tab label="Portfolio" href="#portfolio"/>
          <Tab label="Resume"href="#resume"/>
          <Tab label="Contact" />
        </Tabs>
      </Box>
    );
  }

  
