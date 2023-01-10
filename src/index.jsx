/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Create from './pages/create';
import Game from './pages/game';
import Wait from './pages/wait';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { localSaveUid } from './utils/util';

const theme = createTheme({
  palette: {
    primary: {
      light: '#303030',
      main: '#373737',
      dark: '#222',
      contrastText: '#fff',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
localSaveUid();

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
        <Route path="/wait" element={<Wait />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

