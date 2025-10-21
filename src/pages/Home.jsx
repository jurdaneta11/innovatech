import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Bienvenido a Innovatech</h1>
      <p>Explora nuestros productos destacados.</p>
      <Link to="/products">Ver productos</Link>
    </section>
  );
}