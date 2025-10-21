import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const { user, signIn, signOut } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">Innovatech</Link>
        <Link to="/products">Productos</Link>
      </div>
      <div className="nav-right">
        <Link to="/cart">Carrito ({totalItems()})</Link>
        {user ? (
          <>
            <Link to="/profile">Perfil</Link>
            <button className="link-button" onClick={signOut}>Cerrar sesión</button>
          </>
        ) : (
          <button className="link-button" onClick={() => signIn({ name: "José" })}>Iniciar sesión</button>
        )}
      </div>
    </nav>
  );
}