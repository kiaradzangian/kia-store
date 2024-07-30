import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.jsx';
import ErrorPage from '../error/error-page';

import Product from '../app/pages/product/index.jsx';
import Supermarket from '../headers/supermarket/Supermarket.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/product/',
    element: <Product />,
    children: [],
  },
  {
    path: '/Supermarket/',
    element: <Supermarket />,
    children: [],
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
