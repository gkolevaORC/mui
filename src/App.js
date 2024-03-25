import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Homepage from "./components/Homepage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's login status

  // Function to update login status
  const handleLogin = () => {
    setIsLoggedIn(false);
  };

  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Homepage />
        {isLoggedIn ? (
          <Rightbar /> 
        ) : (
          <Login onClose={handleLogin} /> 
        )}
      </Stack>
    </Box>
  );
}

export default App;
