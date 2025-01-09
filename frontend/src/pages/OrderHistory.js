import React, { useEffect, useState, useContext } from 'react';
import axiosInstance from '../utils/axiosInstance';
import AuthContext from '../context/AuthContext';

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
    <div className="container">
      <h1 className="text-center my-4">Order History</h1>
      {orders.length > 0 ? (
        orders.map(order => (
          <div key={order._id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Order #{order._id}</h5>
              <p className="card-text">Date: {order.date}</p>
              <p className="card-text">Total: ${order.total}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No orders found.</p>
      )}
    </div>
  );
}

export default OrderHistory;