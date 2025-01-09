import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import { List, ListItem, ListItemText, Button } from '@mui/material';

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const handleRemove = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      {state.items.length > 0 ? (
        <List>
          {state.items.map(item => (
            <ListItem key={item._id} secondaryAction={
              <Button variant="contained" color="secondary" onClick={() => handleRemove(item)}>Remove</Button>
            }>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">Your cart is empty.</Typography>
      )}
    </div>
  );
}

export default Cart;