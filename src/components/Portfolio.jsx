import * as React from "react";

import Grid from "@mui/material/Grid";
import {
  Stack,
  Button,
  CardHeader,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";
import data from "./Portfolio.data";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import CardsJokes from "../images/cardsforjokes-mainpage.png";
// import GotMilk from "../images/Got-milk-homepage.png";
// import Blog from "../images/codeChat.png";
// import Planner from "../images/workdaySchedule.png";
// import NotePad from "../images/Note-Pad homepage.png";
// import Editor from "../images/19-Jate.png";
// import ToTask from "../images/toTask-homepage-screenshot.png";
// import { Container } from "@mui/system";

export default function Portfolio() {
  return (
    <Box container bgcolor="#3c3c3c">
      <Grid
        container
        margin={2}
        spacing={2}
        display="flex"
        justifyContent="center"
      >
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
                    style={{ marginTop: "1rem" }}
                  >
                    <Button
                      href={deployUrl}
                      variant="contained"
                    >
                      Live
                    </Button>
                    <Button href={repoUrl} variant="outlined">
                      GitHub
                    </Button>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    //  <Container spacing={2} xs={10} m={6}>

    //     <Grid container item xs={12} sm={6}>
    //       <Stack direction="column" display='flex' justifyContent="center" spacing={2}>
    //         <Card elevation={3}>

    //           <CardHeader
    //           title="Cards for Jokes"

    //           />
    //           <CardMedia
    //           component="img"
    //           height="200"
    //           image={CardsJokes}
    //           alt="Cards For Jokes"
    //           />
    //           <CardContent>
    //             <Stack direction="row" justifyContent="center" >
    //               <Button href='https://danielstewart914.github.io/cards-for-jokes/' color="inherit">Live
    //               </Button>
    //               <Button href='https://github.com/danielstewart914/cards-for-jokes.git' color="inherit">Github</Button>
    //             </Stack>
    //           </CardContent>
    //         </Card>

    //         <Card elevation={3}>
    //           <CardHeader
    //           title="Got Milk? Grocery"
    //           />
    //           <CardMedia
    //           component="img"
    //           height="200"
    //           image={GotMilk}
    //           alt="Got Milk"
    //           />
    //           <CardContent>
    //             <Stack direction="row" justifyContent="center" >
    //               <Button href='https://got-milk-grocery.herokuapp.com/' color="inherit">Live
    //               </Button>
    //               <Button href='https://github.com/teshome28sara/Got_Milk-.git' color="inherit">Github</Button>
    //             </Stack>
    //           </CardContent>
    //         </Card>

    //         <Card elevation={3}>
    //           <CardHeader
    //           title="codeChat"
    //           />
    //           <CardMedia
    //           component="img"
    //           height="200"
    //           image={Blog}
    //           alt="Blog"
    //           />
    //           <CardContent>
    //             <Stack direction="row" justifyContent="center" >
    //               <Button href='https://ch-14-mvc-blog-spot.herokuapp.com/login' color="inherit">Live
    //               </Button>
    //               <Button href='https://github.com/jmotto/Blog-Spot' color="inherit">Github</Button>
    //             </Stack>
    //           </CardContent>
    //         </Card>

    //         <Card elevation={3}>
    //           <CardHeader
    //           title="Note Pad"
    //           />
    //           <CardMedia
    //           component="img"
    //           height="200"
    //           image={NotePad}
    //           alt="Note Pad"
    //           />
    //           <CardContent>
    //             <Stack direction="row" justifyContent="center" >
    //               <Button href='https://ch11-notepad-app.herokuapp.com/' color="inherit">Live
    //               </Button>
    //               <Button href='https://github.com/jmotto/Note-Pad.git' color="inherit">Github</Button>
    //             </Stack>
    //           </CardContent>
    //         </Card>

    //         <Card elevation={3}>
    //           <CardHeader
    //           title="Editor of the Text"
    //           />
    //           <CardMedia
    //           component="img"
    //           height="200"
    //           image={Editor}
    //           alt="Editor"
    //           />
    //           <CardContent>
    //             <Stack direction="row" justifyContent="center" >
    //               <Button href='https://editor-of-the-text.herokuapp.com/' color="inherit">Live
    //               </Button>
    //               <Button href='https://github.com/jmotto/editor-of-the-text.git' color="inherit">Github</Button>
    //             </Stack>
    //           </CardContent>
    //         </Card>

    //         <Card elevation={3}>
    //           <CardHeader
    //           title="Daily Planner"
    //           />
    //           <CardMedia
    //           component="img"
    //           height="200"
    //           image={Planner}
    //           alt="Planner"
    //           />
    //           <CardContent>
    //             <Stack direction="row" justifyContent="center" >
    //               <Button href='https://jmotto.github.io/Daily-Planner/' color="inherit">Live
    //               </Button>
    //               <Button href='https://github.com/jmotto/Daily-Planner.git' color="inherit">Github</Button>
    //             </Stack>
    //           </CardContent>

    //         </Card>

    //         <Card elevation={3}>
    //           <CardHeader
    //           title="toTask"
    //           />
    //           <CardMedia
    //           component="img"
    //           height="200"
    //           image={ToTask}
    //           alt="Planner"
    //           />
    //           <CardContent>
    //             <Stack direction="row" justifyContent="center" >
    //               <Button href='https://to-task-app.herokuapp.com/' color="inherit">Live
    //               </Button>
    //               <Button href='https://github.com/rbishop85/toTask' color="inherit">Github</Button>
    //             </Stack>
    //           </CardContent>

    //         </Card>
    //       </Stack>
    //     </Grid>
    //   </Container>
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
