import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './css/reset.css'
import DataStorageService from './services/DataStorageService/DataStorageService';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

DataStorageService.initStorageItems();

root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


