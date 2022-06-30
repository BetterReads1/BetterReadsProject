import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import 'bootstrap';
// import './_custom.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container border m-3">
    <App />
  </div>,
);
