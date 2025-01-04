import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import { CssBaseline } from '@mui/material';

    ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
      <React.StrictMode>
        <CssBaseline />
        <App />
      </React.StrictMode>
    );
