import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h2>Página no encontrada</h2>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}