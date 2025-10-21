import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/api";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useCart } from "../contexts/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchProductById(id)
      .then(data => { if (mounted) setProduct(data); })
      .catch(err => { if (mounted) setError(err.message); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return null;

  return (
    <section className="product-detail">
      <img src={product.image} alt={product.title} className="detail-image" />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <button onClick={() => addItem(product, 1)}>Agregar al carrito</button>
      </div>
    </section>
  );
}