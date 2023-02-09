import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Strict mode make useReducer called twice
    // <React.StrictMode>
        <App/>  
    /* </React.StrictMode>  */
);
