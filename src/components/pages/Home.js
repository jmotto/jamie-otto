import { Avatar, Card, CardContent } from "@mui/material";
import React from "react";
import { Typography, Box } from "@mui/material";
import MyPhoto from '../../images/Otto.JPG';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import { DiJavascript1, DiMongodb} from 'react-icons/di'




export const Home = () => {
    return(
        <Box sx={{alignContent: 'center'}}>
            <Card>
                <CardContent sx={{ justifyContent: "center" }}>
                    <Typography padding={4} variant="h2">
                        Jamie Otto
                    </Typography>
                    <Typography  variant="h6">
                    Hello! 
                    </Typography>
                    <Typography variant="body2" margin="20px" justifyContent="center">
                    I am a developer learning to code from the UW coding boot camp. When I am not coding, I am spending time with my family and exploring nature.
                    </Typography>

                
                    <Avatar 
                    sx={{ width: 200, height: 200, mx: 57}} src={MyPhoto} alt="Me outside" />
        
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