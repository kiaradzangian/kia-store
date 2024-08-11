import { Outlet, Route, Routes } from 'react-router-dom';
import Headers from '../../../headers/Headers';
import MainProduct from './MainProduct';
import ProductId from './ProductId';
const Product = ({ children }) => {
  return (
    <div>
      <Headers />
      {children || <Outlet />}
    </div>
  );
};

export default Product;
