import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.scss';
import router from './routes';
import { LoaderSpinner } from './components/LoaderSpinner';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<LoaderSpinner />} />
  </React.StrictMode>
);
