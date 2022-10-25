import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Stack, Button, CardHeader, makeStyles } from '@mui/material';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import data from "../Portfolio.data"; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardsJokes from "../../images/cardsforjokes-mainpage.png";
import GotMilk from "../../images/Got-milk-homepage.png";
import Blog from "../../images/blog-homepage-img.png";
import Planner from "../../images/workdaySchedule.png";
import NotePad from "../../images/Note-Pad homepage.png";
import Editor from "../../images/19-Jate.png";
import { Container } from '@mui/system';





export const Portfolio = () => {
  return (

 <Container>
  <Grid container>
    <Grid item variant="outlined">
      <Card elevation={3}>
    
        <CardHeader
        title="Cards for Jokes"
        />
        <CardMedia
        component="img"
        height="200"
        image={CardsJokes}
        alt="Cards For Jokes"
        />
        <CardContent>
          <Stack direction="row" justifyContent="center" >
            <Button href='https://danielstewart914.github.io/cards-for-jokes/' color="inherit">Live
            </Button>
            <Button href='https://github.com/danielstewart914/cards-for-jokes.git' color="inherit">Github</Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
    <Grid item >
      <Card elevation={3}>
        <CardHeader
        title="Got Milk? Grocery"
        />
        <CardMedia
        component="img"
        height="200"
        image={GotMilk}
        alt="Got Milk"
        />
        <CardContent>
          <Stack direction="row" justifyContent="center" >
            <Button href='https://got-milk-grocery.herokuapp.com/' color="inherit">Live
            </Button>
            <Button href='https://github.com/teshome28sara/Got_Milk-.git' color="inherit">Github</Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
    <Grid item >
      <Card elevation={3}>
        <CardHeader
        title="Tech Blog Spot"
        />
        <CardMedia
        component="img"
        height="200"
        image={Blog}
        alt="Blog"
        />
        <CardContent>
          <Stack direction="row" justifyContent="center" >
            <Button href='https://ch-14-mvc-blog-spot.herokuapp.com/login' color="inherit">Live
            </Button>
            <Button href='https://github.com/jmotto/Blog-Spot' color="inherit">Github</Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
    <Grid item >
      <Card elevation={3}>
        <CardHeader
        title="Note Pad"
        />
        <CardMedia
        component="img"
        height="200"
        image={NotePad}
        alt="Note Pad"
        />
        <CardContent>
          <Stack direction="row" justifyContent="center" >
            <Button href='' color="inherit">Live
            </Button>
            <Button href='' color="inherit">Github</Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
    <Grid item >
      <Card elevation={3}>
        <CardHeader
        title="Text Editor"
        />
        <CardMedia
        component="img"
        height="200"
        image={Editor}
        alt="Editor"
        />
        <CardContent>
          <Stack direction="row" justifyContent="center" >
            <Button href='https://ch-14-mvc-blog-spot.herokuapp.com/login' color="inherit">Live
            </Button>
            <Button href='https://github.com/jmotto/Blog-Spot' color="inherit">Github</Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
    <Grid >
      <Card elevation={3}>
        <CardHeader
        title="Daily Planner"
        />
        <CardMedia
        component="img"
        height="200"
        image={Planner}
        alt="Planner"
        />
        <CardContent>
          <Stack direction="row" justifyContent="center" >
            <Button href='' color="inherit">Live
            </Button>
            <Button href='' color="inherit">Github</Button>
          </Stack>
        </CardContent>
    
      </Card>
    </Grid>
  </Grid>
  </Container> 


   
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
