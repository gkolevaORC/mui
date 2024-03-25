import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Lock } from '@mui/icons-material';
import loginImage from '../ormatic.jpg'; // Import your image file from the images directory
import Login from './Login'; // Import the Login component

const Homepage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Function to handle opening the login form
  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  // Function to handle closing the login form
  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const rightbar = document.getElementById('rightbar');
      const homepage = document.getElementById('homepage');
      
      if (rightbar && homepage) {
        const scrollY = rightbar.scrollTop;
        homepage.style.backgroundColor = scrollY > 0 ? '#ffffff' : '#7436';
      }
    };

    const rightbar = document.getElementById('rightbar');
    if (rightbar) {
      rightbar.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (rightbar) {
        rightbar.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <Box
      id="homepage"
      bgcolor="#7436"
      flex={1} p={8}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <style>
        {`
          body {
            background-color: #7436; // Set background color of the body
          }
        `}
      </style>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Welcome" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleOpenLogin}>
            <ListItemIcon>
              <Lock />
            </ListItemIcon>
            <ListItemText primary="Please Login" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <Box textAlign="center">
          </Box>
        </ListItem>
      </List>

      {/* Render the Login component when isLoginOpen state is true */}
      {isLoginOpen && <Login onClose={handleCloseLogin} />}
    </Box>
  );
};

export default Homepage;




