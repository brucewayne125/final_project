import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { Grid, Typography, Card, CardContent, CardActions, Button } from '@mui/material';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Products</Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                <Typography variant="h6">${product.price}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;