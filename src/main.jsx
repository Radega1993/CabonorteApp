import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { CabonorteApp } from './CabonorteApp';
import { store } from './store'
import './styles.css'
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <CabonorteApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
