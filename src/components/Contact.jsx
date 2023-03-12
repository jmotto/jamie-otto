import * as React from "react";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { Typography, FormControl} from '@mui/material';
import { CardContent, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Contact = () => {
  return (
    // <Box
    //   component="form"
    //   sx={{
    //     '& .MuiTextField-root': { m: 1, width: '25ch' },
    //   }}
    //   Validate
    //   autoComplete="off"

    // >
    <Box
      container
      display="flex"
      justifyContent="center"
      bgcolor="#004d40"
      id="contact"
    >
      <CardContent style={{ display: "flex", alignItems: "baseline" }}>
        <Typography
          sx={{
            textAlign: "center",
            width: 250,
            height: 50,
            color: "white",
          }}
        >
          Please feel free to contact me at
        </Typography>
        <Link
          href="mailto:jmotto.dev@gmail.com"
          alt="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          jmotto.dev@gmail.com
        </Link>
        <Link
          margin="0.5em"
          href="https://www.linkedin.com/in/jamie-otto-a913a018/"
          alt="linkedin profile"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://github.com/jmotto"
          alt="github profile"
          target="_blank"
        >
          <GitHubIcon />
        </Link>
      </CardContent>
    </Box>

    // <Box >
    //   <Card  id="contact"
    //   >
    //     <CardContent >
    //       <Typography  >
    //       Contact me at
    //       </Typography>
    //       <Link

    //         href="mailto:jmotto.dev@gmail.com"
    //         alt="email"
    //         target="_blank"
    //         rel="noopener noreferrer">

    //       JMOTTO.DEV@GMAIL.COM
    //       </Link>

    //               {/* <FormControl variant="standard">
    //               <div>
    //                 <Typography variant="h5">
    //                 Contact
    //                 </Typography>
    //                 <Typography variant="body1">
    //                   Leave me a note if you would like to contact me.
    //                 </Typography>

    //                 <TextField
    //                   Name
    //                   id="outlined-error-helper-text"
    //                   label="Name"
    //                   defaultValue="Name"
    //                   helperText="Please enter your name"
    //                   margin="normal"
    //                   required="true"
    //                 />
    //                 <TextField
    //                   Email
    //                   id="outlined-error-helper-text"
    //                   label="Email"
    //                   defaultValue="Email"
    //                   helperText="Please enter your email"
    //                   margin="normal"

    //                 />
    //                 <TextField
    //                   Comment
    //                   id="outlined-error-helper-text"
    //                   label="Comment"
    //                   defaultValue="Comment"
    //                   helperText="Add a comment"
    //                   multiline="true"
    //                   size="medium"
    //                   fullWidth="true"

    //                 />

    //               </div>

    //               <div>
    //               <Button
    //                 variant="outlined"
    //                 onClick={() => {
    //                   alert('clicked');
    //                 }}
    //               >
    //                 Submit
    //                 </Button>
    //               </div>
    //               </FormControl> */}
    //       </CardContent>
    //   </Card>
    // </Box>
  );
};
