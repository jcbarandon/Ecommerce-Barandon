"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPeso } from "@/lib/format";

const SHIPPING_FLAT = 150;
const FREE_SHIP_THRESHOLD = 2500;

export default function CheckoutPage() {
  const { items, subtotal, clearCart, hydrated } = useCart();
  const [placed, setPlaced] = useState(false);
  const [orderNo, setOrderNo] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const shipping = subtotal >= FREE_SHIP_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FLAT;
  const total = subtotal + shipping;

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Stub checkout — no real payment. Generate a mock order number and clear the cart.
    setOrderNo(`BRN-${Date.now().toString().slice(-6)}`);
    setPlaced(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (placed) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
          ✓
        </div>
        <h1 className="mt-6 text-3xl font-black text-slate-900">Order placed!</h1>
        <p className="mt-3 text-slate-600">
          Thank you, {form.fullName || "friend"}. Your order{" "}
          <span className="font-semibold text-slate-900">{orderNo}</span> has been
          received. A confirmation has been sent to{" "}
          <span className="font-semibold text-slate-900">{form.email || "your email"}</span>.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          (This is a demo checkout — no payment was processed.)
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-amber-500 px-7 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-400"
        >
          Back to Shop
        </Link>
      </main>
    );
  }

  if (hydrated && items.length === 0) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-3xl font-black text-slate-900">Nothing to check out</h1>
        <p className="mt-3 text-slate-500">Your cart is empty.</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-amber-500 px-7 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-400"
        >
          Start Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="mb-8 text-3xl font-black tracking-tight text-slate-900">Checkout</h1>

      <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="text-lg font-bold text-slate-900">Shipping details</h2>

          <Field label="Full name" name="fullName" value={form.fullName} onChange={handleChange} />
          <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
          <Field label="Address" name="address" value={form.address} onChange={handleChange} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="City" name="city" value={form.city} onChange={handleChange} />
            <Field label="ZIP / Postal" name="zip" value={form.zip} onChange={handleChange} />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-400"
          >
            Place Order · {formatPeso(total)}
          </button>
          <p className="text-center text-xs text-slate-400">
            Demo checkout — no real payment is taken.
          </p>
        </form>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">Order Summary</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between text-slate-600">
                <span className="truncate pr-2">
                  {item.name} <span className="text-slate-400">×{item.qty}</span>
                </span>
                <span className="shrink-0 font-medium text-slate-900">
                  {formatPeso(item.price * item.qty)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-slate-200 pt-4 space-y-2 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-medium text-slate-900">{formatPeso(subtotal)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Shipping</span>
              <span className="font-medium text-slate-900">
                {shipping === 0 ? "Free" : formatPeso(shipping)}
              </span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-2 text-base font-bold text-slate-900">
              <span>Total</span>
              <span>{formatPeso(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function Field({ label, name, value, onChange, type = "text" }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
      />
    </label>
  );
}
