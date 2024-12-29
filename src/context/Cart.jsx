/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  // props {}
  const [cart, setCart] = useState([]);

  const { children } = props;

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};
