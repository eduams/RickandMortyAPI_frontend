import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>
);

reportWebVitals();
