import { Card, Link } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MyResume from '../../images/resume.png'


export const Resume = () => {
    return(
        <Container >
            <Link variant='h3' href="https://drive.google.com/file/d/1h5NegitGL_XVk9dEpVx7xj1UXAhFUU-k/view?usp=sharing" alt="resume">
            <Card>
            <img height="500px" src={MyResume} alt="resume"/>
            </Card>
            </Link>
           

            
        </Container>

        
    )
}