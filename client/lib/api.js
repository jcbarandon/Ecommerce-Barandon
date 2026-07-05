// Base URL of the Express backend. Override with NEXT_PUBLIC_API_URL if needed.
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

async function request(path) {
  try {
    const res = await fetch(`${API_URL}${path}`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    // Express server likely not running — fail soft so pages can show a message.
    console.error(`API request failed for ${path}:`, err.message);
    return null;
  }
}

export async function getProducts() {
  return (await request("/products")) ?? [];
}

export async function getProductsByCategory(category) {
  return (await request(`/products?category=${encodeURIComponent(category)}`)) ?? [];
}

export async function getProduct(id) {
  return await request(`/products/${encodeURIComponent(id)}`);
}
