import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card">
      <img className="card-img-top" src={product.image} alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;