import { Card, Link } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MyResume from '../../images/otto-resume.png'


export const Resume = () => {
    return(
        <Container >
            <Link variant='h3' href="https://drive.google.com/file/d/16XfS3z1jVHZTSSatj5M4-Qu6hSKftDRu/view?usp=sharing" alt="resume" target="_blank" rel="noopener noreferrer">
            <Card>
            <img height="500px" src={MyResume} alt="resume"/>
            </Card>
            </Link>
           

            
        </Container>

        
    )
}