"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product, qty = 1, className = "" }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      onClick={handleClick}
      className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
        added
          ? "bg-emerald-600 text-white"
          : "bg-slate-950 text-white hover:bg-amber-500 hover:text-slate-950"
      } ${className}`}
    >
      {added ? "Added ✓" : "Add to Cart"}
    </button>
  );
}
