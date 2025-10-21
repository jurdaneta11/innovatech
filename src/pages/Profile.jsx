import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  return (
    <section>
      <h2>Perfil</h2>
      <p>Nombre: {user?.name}</p>
    </section>
  );
}