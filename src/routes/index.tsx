import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import { Layout } from '../pages/Layout';
import Prescriptions from '../pages/Prescriptions';

const Mock = ({ children }: { children: React.ReactNode }) => {
  return (
    <p>
      Você está na tela: <strong>{children}</strong>
    </p>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/prescriptions',
        element: <Prescriptions />,
      },
      {
        path: '/telecon',
        element: <Mock children='Teleconsultas' />,
        children: [{}],
      },
      {
        path: '/contact',
        element: <Mock children='Fale Conosco' />,
      },
    ],
  },
]);

export default router;
