import { Grid, Typography } from "@mui/material";
import React from "react";
// import MyPhoto  from "../../images/Otto";

export const About = () => {
    return(
        <div>
            <Grid container>
                <div>
                    {/* <img src={MyPhoto} alt="Me outside" /> */}
                </div>
                
                <Typography  padding={3} variant="body1">
                Hello! I am a developer currently learning to code from the UW coding boot camp. When I am not coding, I am spending time with my family and exploring nature.
                </Typography>
            </Grid>
            
            
        </div>

        
    )
}