import React, { useState } from 'react';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';
import { Portfolio } from './pages/Portfolio';
import  NavTabs  from './NavTabs';
import { Home } from './pages/Home';
import { Box, Container } from '@mui/material';
// import {Footer} from './Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const style = {
    
  }

  return (
    <Container  >
        <Box 
            sx={{
                bgcolor: '#c8e2d8', 
                height: '100vh',
           
            
            }}>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}

        </Box>
  
    </Container>
  );
}

