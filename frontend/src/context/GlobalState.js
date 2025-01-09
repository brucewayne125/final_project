import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
  user: null,
  cart: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function setUser(user) {
    dispatch({
      type: 'SET_USER',
      payload: user,
    });
  }

  function addToCart(item) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        cart: state.cart,
        setUser,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};