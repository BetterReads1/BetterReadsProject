import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Provider } from 'react-redux';
import App from './pages/App/App.jsx';
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <div id="test-id"> 

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/app" element={<App />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    
    </div>,
);
