// import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Contact Manager
      </Typography>
      <Button color="inherit">Logout</Button>
    </Toolbar>
  </AppBar>
);

export default Header;