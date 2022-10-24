import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import data from "./Portfolio.data"; 
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Portfolio = () => {
  return (
    <Box>
      <Grid container >
        {data.map(({id, title, image, repoUrl, deployUrl}) => (
        <ImageListItem key={id}>
          {image ? <img src={image} alt={image.title}/> : null }
          <Typography fontFamily="Arial" variant="h6">
          {title}
          </Typography>
          <Stack direction="row">
           <Button href={deployUrl} color="inherit">Deployed Page
           </Button>
           <Button href={repoUrl} color="inherit" >Github</Button>
          </Stack>
        </ImageListItem>
        ))}
      </Grid>
    </Box> 
   
  );
}

 
// <ImageList sx={{ width: 500, height: 500 }}>
// {itemData.map((item) => (
//   <ImageListItem key={item.img}>
//     <img
//       src={`${item.img}?w=248&fit=crop&auto=format`}
//       srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//       alt={item.title}
//       loading="lazy"
//     />
//     <ImageListItemBar
//       title={item.title}
//       position="below"
//     />
//   </ImageListItem>
// ))}
// </ImageList>
// const itemData = [
//   {
//     img: 'https://github.com/jmotto/jamie-otto/blob/main/src/images/got-milk-image.jpg',
//     title: 'Got Milk Grocery',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
  
// ];


// </ImageList>
//       <Grid container > 
//           {data.map(({id, title, image, repoUrl, deployUrl}) => (
//             <div key={id} className="">
//               {image ? <img src={image} alt="got-milk"/> : null }
//               <div>
//                 <h3>{title}</h3>
//                 <div>
//                   <Link href={deployUrl}>Live Page</Link>
//                   <Link href={repoUrl}>Github</Link>
//                 </div>
//               </div>
//             </div>
//           ))}

// </Grid>
