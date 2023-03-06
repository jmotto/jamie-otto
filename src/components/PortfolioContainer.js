// import React, { useState } from 'react';
// import Contact from './Contact';
// import { Resume } from './Resume';
// import { Portfolio } from './Portfolio';
// import  NavTabs  from './NavTabs';
// import { Home } from './Home';
// import { Box, Card, Container, Typography } from '@mui/material';


// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState('Home');

//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return <Home />;
//     }
//     if (currentPage === 'Portfolio') {
//       return <Portfolio />;
//     }
//     if (currentPage === 'Resume') {
//         return <Resume />;
//     }
//     return <Contact />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <Container  >
//         <Box 
//             sx={{
//                 bgcolor: '#c8e2d8', 
//                 height: '100vh',
           
            
//             }}>
//             <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}  />
//             <Typography variant="h2">
//               Jamie Otto
//             </Typography>
//             <Card>
//             {renderPage()}
//             </Card>
//         </Box>
  
//     </Container>
//   );
// }

