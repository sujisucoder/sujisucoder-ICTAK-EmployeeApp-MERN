import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const tokenrelease = () => {
    sessionStorage.removeItem('userToken');
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ backgroundColor: 'blue' }} position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employee Dashboard
            </Typography>
            <Button color="secondary">
              <Link style={{ color: 'red', textDecoration: 'none' }} to={'/loginadmin'}>
                Admin Login
              </Link>
            </Button>
            <Button color="secondary" sx={{ color: 'red', backgroundColor: 'yellow' }}>
              <Link style={{ color: 'red', textDecoration: 'none' }} to={'/employees'}>
                Admin Home
              </Link>
            </Button>
            <Button color="secondary" onClick={tokenrelease}>
              <Link style={{ color: 'red', textDecoration: 'none' }} to={'/'}>
                Logout
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
