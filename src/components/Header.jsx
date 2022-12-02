import React from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        position: 'fixed',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: '#222',
        zIndex: '100',
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={() => navigate('/')}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

