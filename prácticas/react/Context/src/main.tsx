import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainTextComponent from './MainTextComponent.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainTextComponent />
  </React.StrictMode>
);
