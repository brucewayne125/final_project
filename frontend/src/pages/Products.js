import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import ProductCard from './ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Products</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;