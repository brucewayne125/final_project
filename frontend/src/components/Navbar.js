import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Navbar() {
  const { state, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          MyApp
        </Typography>
        <Button color="inherit" component={Link} to="/products">Products</Button>
        <Button color="inherit" component={Link} to="/cart">Cart</Button>
        {!state.isAuthenticated ? (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </>
        ) : (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;