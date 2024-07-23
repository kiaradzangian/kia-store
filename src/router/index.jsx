import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.jsx';
import ErrorPage from '../error/error-page';

import Product from '../app/pages/product/index.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/product',
    element: <Product />,
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
