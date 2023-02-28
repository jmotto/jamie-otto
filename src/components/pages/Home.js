import { Avatar, Card, CardContent } from "@mui/material";
import React from "react";
import { Typography, Box } from "@mui/material";
import MyPhoto from '../../images/Otto.JPG';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import { DiJavascript1, DiMongodb} from 'react-icons/di'
import { Stack } from "@mui/system";




export const Home = () => {
    return(
        <Box sx={{alignContent: 'center'}}>
            <Card>
                <CardContent sx={{ justifyContent: "center" }}>
                    {/* <Typography padding={4} variant="h2">
                        Jamie Otto
                    </Typography> */}
                    <Typography  variant="h6">
                    Hello! 
                    </Typography>
                    <Typography variant="body2" margin="20px" justifyContent="center">
                     I am a full stack web developer with experience with web technologies such as HTML, CSS, databases, JavaScript, React, Node, and Express, GitHub. When I am not coding, I am spending time with my family and exploring nature.
                     Contact me at jmotto.dev@gmail.com
                    </Typography>

                    <Stack  direction="row" style={{ justifyContent: "center", display: "flex" }} spacing={1}> 
                    <Avatar 
                    sx={{ width: 200, height: 200, }} src={MyPhoto} alt="Me outside" 
                    />
                 
                    </Stack>
                    <Typography>
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