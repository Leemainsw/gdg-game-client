/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Create from './pages/create';
import Game from './pages/game';
import Wait from './pages/wait';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create" element={<Create />} />
      <Route path="/wait" element={<Wait />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  </BrowserRouter>
);

