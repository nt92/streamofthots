import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GA4React} from "ga-4-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

try {
    setTimeout(_ => {
        const ga4react = new GA4React(process.env.REACT_APP_GA);
        ga4react.initialize().catch(err => console.error(err));
    }, 4000);
} catch (err) {
    console.error(err);
}

reportWebVitals();
