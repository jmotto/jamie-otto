// import React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';


// function NavTabs({ currentPage, handlePageChange }) {
//     const [value, setValue] = React.useState();

//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };

//   return (
//     <Tabs value={value} onChange={handleChange} centered textColor='secondary'
//     indicatorColor="secondary">

//         <Tab
//         value='home'
//         label='Home'
//           href="#home"
//           onClick={() => handlePageChange('Home')}

//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         />

//         <Tab
//              value='portfolio'
//              label='Portfolio'
//           href="#portfolio"
//           onClick={() => handlePageChange('Portfolio')}

//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         />
    
//         <Tab
//          value='contact'
//          label='Contact'
//           href="#contact"

//           onClick={() => handlePageChange('Contact')}
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         />
//         <Tab
//          value='resume'
//          label='Resume'
//           href="#resume"

//           onClick={() => handlePageChange('Resume')}
//           className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//         />
     

//     </Tabs>
//   );
// }

// export default NavTabs;
