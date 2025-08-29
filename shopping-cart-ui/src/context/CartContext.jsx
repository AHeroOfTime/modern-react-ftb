import { useState } from 'react';
import { CartContext } from './Context';

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}
