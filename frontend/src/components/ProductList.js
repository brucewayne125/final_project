import React, { useEffect, useContext } from 'react';
import axiosInstance from '../axiosInstance';
import { GlobalContext } from '../context/GlobalState';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/products');
        dispatch({ type: 'SET_PRODUCTS', payload: response.data });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="product-list">
      {state.products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;