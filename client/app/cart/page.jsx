"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CategoryIcon from "@/components/CategoryIcon";
import { formatPeso } from "@/lib/format";

export default function CartPage() {
  const { items, subtotal, updateQty, removeItem, hydrated } = useCart();

  if (!hydrated) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-slate-500">Loading cart…</p>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-3xl font-black text-slate-900">Your cart is empty</h1>
        <p className="mt-3 text-slate-500">
          Looks like you haven't added anything yet.
        </p>
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
      <h1 className="mb-8 text-3xl font-black tracking-tight text-slate-900">
        Your Cart
      </h1>

      <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
        <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-4 p-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                <CategoryIcon category={item.category} className="h-12 w-12 text-slate-800" />
              </div>

              <div className="min-w-0 flex-1">
                <Link
                  href={`/product/${item.id}`}
                  className="font-semibold text-slate-900 hover:text-amber-600"
                >
                  {item.name}
                </Link>
                <p className="text-sm text-slate-500">{formatPeso(item.price)} each</p>

                <div className="mt-2 flex items-center gap-3">
                  <div className="flex items-center rounded-full border border-slate-300">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="px-3 py-1 text-slate-600 hover:text-amber-600"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="px-3 py-1 text-slate-600 hover:text-amber-600"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-slate-400 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-right font-bold text-slate-900">
                {formatPeso(item.price * item.qty)}
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">Order Summary</h2>
          <div className="mt-4 flex justify-between text-sm text-slate-600">
            <span>Subtotal</span>
            <span className="font-semibold text-slate-900">{formatPeso(subtotal)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-slate-600">
            <span>Shipping</span>
            <span className="text-slate-500">Calculated at checkout</span>
          </div>
          <div className="mt-4 border-t border-slate-200 pt-4 flex justify-between text-base font-bold text-slate-900">
            <span>Total</span>
            <span>{formatPeso(subtotal)}</span>
          </div>

          <Link
            href="/checkout"
            className="mt-6 block rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-bold text-slate-950 transition-colors hover:bg-amber-400"
          >
            Proceed to Checkout
          </Link>
          <Link
            href="/"
            className="mt-3 block text-center text-sm text-slate-500 hover:text-amber-600"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}
