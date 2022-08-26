import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PropertiesContextProvider } from './context/PropertiesContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PropertiesContextProvider>
    <App />
    </PropertiesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
