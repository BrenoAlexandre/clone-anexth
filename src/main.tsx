import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Layout from './pages/Layout';
import Prescription from './pages/Prescriptions';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout />
    <main>
      <Prescription /> {/* //TODO Rotas aqui */}
    </main>
  </React.StrictMode>
);
