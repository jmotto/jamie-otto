import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography, FormControl, Card, CardContent } from '@mui/material';



export const Contact = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      Validate
      autoComplete="off"
    >
      <Card>
        <CardContent>
      
                  <FormControl variant="standard">
                  <div>
                    <Typography variant="h5">
                    Contact
                    </Typography>
                    <Typography variant="body1">
                      Leave me a note if you would like to contact me. 
                    </Typography>
                  
                    <TextField
                      Name
                      id="outlined-error-helper-text"
                      label="Name"
                      defaultValue="Name"
                      helperText="Please enter your name"
                      margin="normal"
                      required="true"
                    />
                    <TextField
                      Email
                      id="outlined-error-helper-text"
                      label="Email"
                      defaultValue="Email"
                      helperText="Please enter your email"
                      margin="normal"
                      
                    />
                    <TextField
                      Comment
                      id="outlined-error-helper-text"
                      label="Comment"
                      defaultValue="Comment"
                      helperText="Add a comment"
                      multiline="true"
                      size="medium"
                      fullWidth="true"
                  
                    />

                  </div>
                  
                  <div>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      alert('clicked');
                    }}
                  >
                    Submit
                    </Button>
                  </div>
                  </FormControl>
          </CardContent>
      </Card>
    </Box>
  );
}
