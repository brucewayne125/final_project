import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const handleRemove = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Shopping Cart</h1>
      {state.items.length > 0 ? (
        <div className="list-group">
          {state.items.map(item => (
            <div key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.name}</span>
              <button className="btn btn-danger btn-sm" onClick={() => handleRemove(item)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;