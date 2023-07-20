import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import { Stack, Button, Typography, CardActionArea } from "@mui/material";
import data from "./Portfolio.data";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Portfolio() {
  return (
    //   <Grid container bgcolor="#3c3c3c" id="portfolio" alignItems="center">
    //     <ImageList  xs={12} sm={4} sx={{ width: 900, height: 700 }} cols={3} rowHeight={300} >
    //       {data.map(({ id, title, image, desc, repoUrl, deployUrl }) => (
    //         <ImageListItem  key={id}>
    //           <Card
    //             elevation={3}
    //             sx={{
    //               height: "100%",
    //               display: "flex",
    //               flexDirection: "column",
    //               maxWidth: 300,
    //               maxHeight: 300,
    //             }}
    //           >
    //             <CardActionArea>
    //               <CardMedia>
    //                 {image ? (
    //                   <img
    //                     src={image}
    //                     alt={title}
    //                     style={{
    //                       objectFit: "cover",
    //                       height: "150px",
    //                       maxHeight: "100%",
    //                       width: "100%",
    //                     }}
    //                   />
    //                 ) : null}
    //               </CardMedia>
    //               <CardContent style={{ flexGrow: 1 }}>
    //                 <Typography fontFamily="Arial" variant="h6" gutterBottom>
    //                   {title}
    //                 </Typography>
    //                 <Typography variant="body2" color="textSecondary">
    //                   {desc}
    //                 </Typography>
    //                 <Stack
    //                   direction="row"
    //                   justifyContent="center"
    //                   style={{ margin: "1rem" }}
    //                 >
    //                   <Button
    //                     href={deployUrl}
    //                     variant="contained"
    //                     size="small"
    //                     target="_blank"
    //                   >
    //                     Live
    //                   </Button>
    //                   <Button
    //                     href={repoUrl}
    //                     variant="outlined"
    //                     size="small"
    //                     target="_blank"
    //                   >
    //                     <GitHubIcon></GitHubIcon>
    //                   </Button>
    //                 </Stack>
    //               </CardContent>
    //             </CardActionArea>
    //           </Card>
    //         </ImageListItem>
    //       ))}
    //     </ImageList>
    //   </Grid>
    // );

    <Grid container bgcolor="#3c3c3c" id="portfolio">
      <Typography
        sx={{
          color: "white",
          width: "100%",
          justifyContent: "center",
          display: "flex",
          padding: "0.5em",
        }}
        variant="h5"
      >
        My Work
      </Typography>
      <Grid container margin={2} spacing={1}>
        {data.map(({ id, title, image, desc, repoUrl, deployUrl }) => (
          <Grid item xs={12} sm={4} key={id}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                maxWidth: 300,
                maxHeight: 300,
              }}
            >
              <CardActionArea>
                <CardMedia>
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      style={{
                        objectFit: "cover",
                        height: "150px",
                        maxHeight: "100%",
                        width: "100%",
                      }}
                    />
                  ) : null}
                </CardMedia>
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography fontFamily="Arial" variant="h6" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {desc}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    style={{ margin: "1rem" }}
                    gap="2em"
                  >
                    <Button
                      href={deployUrl}
                      variant="contained"
                      size="small"
                      target="_blank"
                    >
                      Live
                    </Button>
                    <Button
                      href={repoUrl}
                      variant="outlined"
                      size="small"
                      target="_blank"
                    >
                      <GitHubIcon></GitHubIcon>
                    </Button>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

// <Container display="flex">
//   <Grid container>
//     <Card elevation={3} >
//     {data.map(({id, title, image, repoUrl, deployUrl}) => (

//     <CardContent key={id} >
//       {image ? <img src={image} alt={image.title}/> : null }
//       <Typography fontFamily="Arial" variant="h6">
//       {title}
//       </Typography>
//       <Stack direction="row" justifyContent="center" >
//       <Button href={deployUrl} color="inherit">Live
//       </Button>
//       <Button href={repoUrl} color="inherit">Github</Button>
//       </Stack>
//     </CardContent>
//     ))}
//     </Card>
//   </Grid>
// </Container>
