import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.jsx';
import ErrorPage from '../error/error-page';
import Cart from './cart/Cart.jsx';
import Product from '../app/pages/product/index.jsx';
import Supermarket from '../headers/supermarket/Supermarket.jsx';
import ProductId from '../app/pages/product/ProductId.jsx';
import Layout from '../layout';
import MainProduct from '../app/pages/product/MainProduct.jsx';
const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'product',
        element: <Product />,
        children: [
          {
            path: '',
            element: <MainProduct />,
          },
          {
            path: ':productId',
            element: <ProductId />,
          },
        ],
      },
      {
        path: '/Cart/',
        element: <Cart />,
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
