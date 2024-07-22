import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.jsx';
import Product from '../product/index.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
