import Link from "next/link";
import Logo from "./icons/Logo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-50">
      {/* Radiant sun-inspired glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-block rounded-full border border-amber-500/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-500">
            Proudly Filipino · Est. 2025
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Wear your <span className="text-amber-500">heritage</span> with pride.
          </h1>
          <p className="mt-6 max-w-md text-lg text-slate-300">
            Premium men's shirts, caps, and shoes — crafted with the artistry
            and symbols of the Philippines. Modern fits, timeless roots.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/category/shirts"
              className="rounded-full bg-amber-500 px-7 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-400"
            >
              Shop the Collection
            </Link>
            <Link
              href="#categories"
              className="rounded-full border border-slate-700 px-7 py-3 text-sm font-bold text-slate-100 transition-colors hover:border-amber-500 hover:text-amber-500"
            >
              Browse Categories
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <Logo className="h-64 w-64 text-slate-100 drop-shadow-2xl md:h-80 md:w-80" showText={false} />
        </div>
      </div>
    </section>
  );
}
