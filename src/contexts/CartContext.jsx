import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(product, qty = 1) {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + qty } : p);
      }
      return [...prev, { ...product, qty }];
    });
  }

  function removeItem(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  function updateQty(id, qty) {
    setCart(prev => prev.map(p => p.id === id ? { ...p, qty } : p));
  }

  function clearCart() {
    setCart([]);
  }

  function totalItems() {
    return cart.reduce((s, p) => s + p.qty, 0);
  }

  function subtotal() {
    return cart.reduce((s, p) => s + p.qty * p.price, 0);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQty, clearCart, totalItems, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}