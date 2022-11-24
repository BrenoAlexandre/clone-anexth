import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './pages/Header';
import Prescription from './pages/Prescriptions';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <main>
      <Prescription /> {/* //TODO Rotas aqui */}
    </main>
  </React.StrictMode>
);
