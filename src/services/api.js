const API_BASE = "https://fakestoreapi.com"; // reemplaza por la API real si corresponde

export async function fetchProducts() {
    const res = await fetch(`${API_BASE}/products`);
    if (!res.ok) throw new Error("Error cargando productos");
    return res.json();
}

export async function fetchProductById(id) {
    const res = await fetch(`${API_BASE}/products/${id}`);
    if (!res.ok) throw new Error("Error cargando producto");
    return res.json();
}