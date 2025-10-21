import React from "react";
import { useCart } from "../contexts/CartContext";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();

  function handlePlaceOrder() {
    clearCart();
    alert("Pedido simulado realizado. Gracias por comprar en Innovatech.");
  }

  if (cart.length === 0) return <section><h2>No hay productos en el carrito</h2></section>;

  return (
    <section>
      <h2>Checkout</h2>
      <p>Total a pagar: ${subtotal().toFixed(2)}</p>
      <button onClick={handlePlaceOrder}>Finalizar compra</button>
    </section>
  );
}