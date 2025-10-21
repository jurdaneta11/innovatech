import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        {children}
      </main>
      <footer className="footer">Innovatech © {new Date().getFullYear()}</footer>
    </div>
  );
}