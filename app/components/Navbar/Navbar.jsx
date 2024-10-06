'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

 
export default function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
        <Link href='/' style={{color:'#fff', textDecoration:'none'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            fontSize={20}
          >
            Files Manager
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
