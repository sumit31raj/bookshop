import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BookIcon from '@mui/icons-material/Book';
import Typography from "@mui/material/Typography";

const NavBar = () => (
  <AppBar position="relative">
    <Toolbar>
      <BookIcon sx={{ mr: 2 }} />
      <Typography variant="h6" color="inherit" noWrap>
        Bookshop
      </Typography>
    </Toolbar>
  </AppBar>
);

export default NavBar;
