import { Card, Link } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MyResume from '../../images/resume_screenshot.png'


export const Resume = () => {
    return(
        <Container >
            <Link variant='h3' href="https://drive.google.com/file/d/1pIu89MjJthQWPu3YnlVM7C-wCINdcgdS/view?usp=sharing" alt="resume" target="_blank" rel="noopener noreferrer">
            <Card>
            <img height="500px" src={MyResume} alt="resume"/>
            </Card>
            </Link>
           

            
        </Container>

    )
}