import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.jsx';
import ErrorPage from '../error/error-page';

import Product from '../app/pages/product/index.jsx';
import Supermarket from '../headers/supermarket/Supermarket.jsx';
import ProductId from '../app/pages/product/ProductId.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/product/',
    element: <Product />,
    children: [
      {
        path: ':productId',
        element: <ProductId />,
      },
    ],
  },
  {
    path: '/Supermarket/',
    element: <Supermarket />,
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
