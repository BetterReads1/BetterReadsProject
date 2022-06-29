import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Provider } from 'react-redux';
import App from './pages/App/App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <div id="test-id"> 

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
        </Routes>
      </BrowserRouter>
    
    </div>,
);
