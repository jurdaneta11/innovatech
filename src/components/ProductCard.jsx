import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} className="card-image" />
      </Link>
      <h3 className="card-title">{product.title}</h3>
      <p className="card-price">${product.price}</p>
      <div className="card-actions">
        <button onClick={() => addItem(product, 1)}>Agregar al carrito</button>
        <Link to={`/products/${product.id}`} className="details-link">Ver</Link>
      </div>
    </div>
  );
}