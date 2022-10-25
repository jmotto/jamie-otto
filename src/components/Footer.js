import { Box, Link, Typography, Container} from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return(
    <Container >
        <Box  sx={{
            bgcolor: '#c8e2d8', 
            width: '100%',
            justifyContent: 'center'
       
        }}>
            <Typography>
            ©2022 Jamie Otto
            </Typography>
            <Link href="https://www.linkedin.com/in/jamie-otto-a913a018/" alt="linkedin profile">
                <LinkedInIcon />
            </Link>
            <Link href="https://github.com/jmotto" alt="github profile">
                <GitHubIcon/>
            </Link>
        </Box>

    </Container>
    
    )
}