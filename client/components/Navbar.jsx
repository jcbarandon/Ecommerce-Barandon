"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./icons/Logo";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Shirts", href: "/category/shirts" },
  { label: "Caps", href: "/category/caps" },
  { label: "Shoes", href: "/category/shoes" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, hydrated } = useCart();
  const cartLabel = hydrated ? `Cart (${count})` : "Cart";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-slate-50">
          <Logo className="h-10 w-10 text-slate-50" showText={false} />
          <span className="text-lg font-bold tracking-wide">BARANDON INC.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-amber-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-amber-500 hover:text-amber-500">
            Sign In
          </button>
          <Link
            href="/cart"
            className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
          >
            {cartLabel}
          </Link>
        </div>

        <button
          className="text-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-slate-800 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-amber-500"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-amber-500 px-5 py-2 text-center text-sm font-semibold text-slate-950"
          >
            {cartLabel}
          </Link>
        </nav>
      )}
    </header>
  );
}
