import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function CartPage() {
  const { cart, removeItem, updateQty, subtotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <section>
        <h2>Tu carrito está vacío</h2>
        <Link to="/products">Ir a productos</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Carrito</h2>
      <ul className="cart-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-thumb" />
            <div className="cart-meta">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <div>
                <label>Cantidad</label>
                <input type="number" min="1" value={item.qty} onChange={e => updateQty(item.id, Number(e.target.value))} />
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p>Subtotal: ${subtotal().toFixed(2)}</p>
        <button onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout" className="btn-primary">Ir a pagar</Link>
      </div>
    </section>
  );
}