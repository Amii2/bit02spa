import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) =>
      [...prevCartItems, product].sort((a, b) =>
        a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
      )
    );
  };

  const removeFromCart = (itemIndex) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .toSpliced(itemIndex, 1)
        .sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))
    );
  };

  const removeAllFromCart = (itemName) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .filter((item) => item.name !== itemName)
        .sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, curr) => acc + curr.price, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        getTotalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
