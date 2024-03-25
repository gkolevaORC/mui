import { DataObject, FactCheck, Home } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'

const Sidebar = () => {
  return (
<Box bgcolor="#7436" 
flex={3}
p={8} 
sx={{display: { xs:"none", sm:"block" }}}>
   <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home> </Home>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DataObject></DataObject>
              </ListItemIcon>
              <ListItemText primary="Location Datapoints" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FactCheck></FactCheck>
              </ListItemIcon>
              <ListItemText primary="Location Datapoints Act" />
            </ListItemButton>
          </ListItem>
        </List>
 
 </Box>
 );
};

export default Sidebar