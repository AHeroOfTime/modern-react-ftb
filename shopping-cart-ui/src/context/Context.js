import { createContext, useContext } from 'react';

export const ProductContext = createContext();

// a quick custom hook that allows us to shorten our imports in each file we want to use our context
export function useProducts() {
  return useContext(ProductContext);
}
