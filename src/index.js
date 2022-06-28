import React, {StrictMode} from "react";
import ReactDOM from 'react-dom';
import App from '../client/App.jsx';
import './style.css';

ReactDOM.render(
    <div id="test-id">
        <StrictMode>
        <App/>
        </StrictMode>
    </div>,
    document.getElementById('root')
);
