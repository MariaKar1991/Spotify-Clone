// Importing necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing CSS file for styling
import './index.css';

// Importing the main App component
import App from './App';

// Importing a function to report web vitals
import reportWebVitals from './reportWebVitals';

// Creating a root using ReactDOM.createRoot and specifying the root element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within StrictMode for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Reporting web vitals
reportWebVitals();
