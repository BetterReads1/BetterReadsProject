import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route
            path="*"
            element={
              <main style={{padding: '1rem'}}>
                <p>There's nothing here!</p>
              </main>
            } /* no route found */
          />
        </Routes>
      </BrowserRouter>
    </StrictMode>
);