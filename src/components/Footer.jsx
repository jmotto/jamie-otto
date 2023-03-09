import React from "react";
import { Box, Link, Typography, Container} from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return(
    <Box sx={{
        bgcolor: 'red', 
       
        }}>
        
            <Typography >
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