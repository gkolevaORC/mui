import React, { useRef, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import { Close, Send } from '@mui/icons-material';
import Rightbar from './Rightbar'; // Import the Rightbar component

const Login = ({ onClose }) => {
  const [title, setTitle] = useState('Login');
  const [isRegister, setIsRegister] = useState(false);
  const [showRightbar, setShowRightbar] = useState(false); // State to control showing Rightbar
  const [isRegistered, setIsRegistered] = useState(false); // State to track successful registration
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful submission
    // For demonstration purposes, assume submission is always successful
    if (isRegister) {
      setIsRegistered(true); // Update state to indicate successful registration
      setIsRegister(false); // Switch back to login mode
      setTitle('Login'); // Change dialog title back to 'Login'
    } else {
      setShowRightbar(true); // Show Rightbar upon successful login
    }
  };

  const handleClose = () => {
    onClose(); // Close the dialog when the close button is clicked
  };

  // If Rightbar should be shown, render it instead of the Login dialog
  if (showRightbar) {
    return <Rightbar />;
  }

  // If user has successfully registered, show a message and reset registration form
  if (isRegistered) {
    return (
      <Dialog open={true}>
        <DialogTitle>
          Registration Successful
          <IconButton
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: (theme) => theme.palette.grey[500],
            }}
            onClick={handleClose} // Use handleClose function to close the dialog
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Your account has been successfully registered. Please login to access your data.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: '19px' }}>
          <Button onClick={() => setIsRegistered(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <Dialog open={true}>
      <DialogTitle>
        {title}
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={handleClose} // Use handleClose function to close the dialog
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <DialogContentText>
            Please fill your information in the fields below:
          </DialogContentText>
          {isRegister && (
            <TextField
              autoFocus
              margin="normal"
              variant="standard"
              id="name"
              label="Name"
              type="text"
              fullWidth
              inputProps={{ minLength: 2 }}
              required
            />
          )}
          <TextField
            autoFocus={!isRegister}
            margin="normal"
            variant="standard"
            id="email"
            label="Email"
            type="email"
            fullWidth
            inputRef={emailRef}
            required
          />
          <TextField
            margin="normal"
            variant="standard"
            id="password"
            label="Password"
            type="password"
            fullWidth
            inputRef={passwordRef}
            required
          />
          {isRegister && (
            <TextField
              margin="normal"
              variant="standard"
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              inputRef={confirmPasswordRef}
              required
            />
          )}
        </DialogContent>
        <DialogActions sx={{ px: '19px' }}>
          <Button type="submit" variant="contained" endIcon={<Send />}>
            Submit
          </Button>
        </DialogActions>
      </form>
      <DialogActions sx={{ justifyContent: 'left', p: '5px 24px' }}>
        {isRegister
          ? 'Do you have an account? Sign in now '
          : "Don't you have an account? Create one now "}
        <Button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Login' : 'Register'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;


