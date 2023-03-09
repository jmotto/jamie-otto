import React from "react";
import { Box, Link, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return(
    <Box sx={{
        bgcolor: '#3c3c3c', 
        display: 'flex',
        justifyContent: 'center',
        padding: 1,
        }}>
        
            <Typography variant="h8">
            ©2022 Jamie Otto
            </Typography>
            <Link href="https://www.linkedin.com/in/jamie-otto-a913a018/" alt="linkedin profile">
                <LinkedInIcon />
            </Link>
            <Link href="https://github.com/jmotto" alt="github profile">
                <GitHubIcon/>
            </Link>


    </Box>
    
    )
}