import { Avatar, Card, CardContent, createStyles } from "@mui/material";
import React from "react";
import { Typography, Box } from "@mui/material";
import MyPhoto from '../images/Otto.JPG';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import { DiJavascript1, DiMongodb} from 'react-icons/di'
// import { Stack } from "@mui/system";



export default function Home() {
    return(
        <Box sx={{ justifyContent: 'space-evenly'}}>
            <Card>
                <CardContent sx={{border: 1 , borderColor: 'secondary.main', justifyContent: 'center'}}>
                    <Typography variant="h3">
                    Hello! I am Jamie Otto.
                    </Typography>
                    <Typography  sx={{border: 1 , width: 900, justifyContent: 'space-evenly', flexWrap: 'wrap' }} >
                    <Avatar 
                    sx={{justifyContent: "center" , width: 200, height: 200, }} src={MyPhoto} alt="Me outside" 
                    />
                     I am a full stack web developer with experience with web technologies such as HTML, CSS, databases, JavaScript, React, Node, and Express, GitHub. When I am not coding, I am spending time with my family and exploring nature.
                    </Typography>
                   
                    {/* <Stack  direction="row" style={{ justifyContent: "center", display: "flex" }} spacing={1}> 
                    
                    </Stack> */}
                    <Typography variant="h6">
                    jmotto.dev@gmail.com
                    </Typography>
                    <Typography variant="h6">Technologies I Know</Typography>
                        <div >
                        <DiJavascript1 />
                        <FaReact/>
                        <DiMongodb/>
                        <FaNodeJs/>
                        
                        </div>
                </CardContent>
            </Card>

        </Box>

        
    )
}