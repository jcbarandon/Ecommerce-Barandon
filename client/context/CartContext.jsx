"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "barandon_cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load persisted cart once, on mount (client only).
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  // Persist on every change, but only after the initial load so we don't
  // clobber stored data with the empty initial state.
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  function addItem(product, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((it) => it.id === product.id);
      if (existing) {
        return prev.map((it) =>
          it.id === product.id ? { ...it, qty: it.qty + qty } : it
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          qty,
        },
      ];
    });
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  function updateQty(id, qty) {
    if (qty < 1) return removeItem(id);
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty } : it)));
  }

  function clearCart() {
    setItems([]);
  }

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, it) => {
        acc.count += it.qty;
        acc.subtotal += it.qty * it.price;
        return acc;
      },
      { count: 0, subtotal: 0 }
    );
  }, [items]);

  const value = {
    items,
    count,
    subtotal,
    hydrated,
    addItem,
    removeItem,
    updateQty,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
