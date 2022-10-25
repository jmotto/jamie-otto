import { Card, Link } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MyResume from '../../images/resume.png'


export const Resume = () => {
    return(
        <Container >
            <Link variant='h3' href="https://docs.google.com/document/d/1a1rSTqm3IAyGMc-mtgR2ukyGWeH7oBUJl-iFJQORjrE/edit?usp=sharing" alt="resume">
            <Card>
            <img height="500px" src={MyResume} alt="resume"/>
            </Card>
            </Link>
           

            
        </Container>

        
    )
}