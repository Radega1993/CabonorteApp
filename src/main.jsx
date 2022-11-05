import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { CabonorteApp } from './CabonorteApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CabonorteApp />
    </BrowserRouter>
  </React.StrictMode>
)
