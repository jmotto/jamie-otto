import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { useFormControl } from '@mui/material/FormControl';
import Button from '@mui/material/Button';

export const Contact = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          Name
          id="outlined-error-helper-text"
          label="Name"
          defaultValue="Name"
          helperText="Please enter your name"
          margin="normal"
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
  
    </Box>
  );
}
