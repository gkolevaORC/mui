import { AppBar, Badge, Box, Button, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled } from "@mui/system";
import SavingsIcon from '@mui/icons-material/Savings';
import { Lock } from '@mui/icons-material';
import Login from './Login';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({theme}) => ({
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Function to handle login button click
  const handleLogin = () => {
    setOpen(true);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs:"none, sm:block"}}}>
        <img src="Logo.png" alt="logo" width={100} />

        </Typography>
        <SavingsIcon sx={{display: {xs:"block", sm:"none"}}}></SavingsIcon>
        <Search><InputBase placeholder="search..."></InputBase></Search>
        <Icons>
          {/* Add the login button */}
          <Button color="inherit" startIcon={<Lock />} onClick={handleLogin}>
            Login
          </Button>
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
   
      </Menu>
      {open && <Login onClose={() => setOpen(false)} />}
    </AppBar>
  )
}

export default Navbar;


