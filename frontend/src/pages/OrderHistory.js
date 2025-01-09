import React, { useEffect, useState, useContext } from 'react';
import axiosInstance from '../utils/axiosInstance';
import AuthContext from '../context/AuthContext';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function OrderHistory() {
  const { state } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (state.isAuthenticated) {
      axiosInstance.get('/orders', {
        headers: {
          Authorization: `Bearer ${state.user.token}`
        }
      })
        .then(response => setOrders(response.data))
        .catch(error => console.error('Error fetching orders:', error));
    }
  }, [state.isAuthenticated, state.user.token]);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Order History</Typography>
      {orders.length > 0 ? (
        <Grid container spacing={3}>
          {orders.map(order => (
            <Grid item xs={12} key={order._id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Order #{order._id}</Typography>
                  <Typography variant="body2">Date: {order.date}</Typography>
                  <Typography variant="h6">Total: ${order.total}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1">No orders found.</Typography>
      )}
    </div>
  );
}

export default OrderHistory;