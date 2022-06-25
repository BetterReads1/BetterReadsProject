import React, {StrictMode} from "react";
import ReactDOM from 'react-dom';
import App from '../client/App';

ReactDOM.render(
    <div>
        <StrictMode>
        <App/>
        </StrictMode>
    </div>,
    document.getElementById('root')
);
