import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryIcon from "@/components/CategoryIcon";
import AddToCartButton from "@/components/AddToCartButton";
import { getProduct } from "@/lib/api";
import { formatPeso } from "@/lib/format";

export default async function ProductPage({ params }) {
  const { id } = params;
  const product = await getProduct(id);
  if (!product) notFound();

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/" className="hover:text-amber-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${product.category}`} className="capitalize hover:text-amber-600">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{product.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-3xl bg-slate-100 p-16">
          <CategoryIcon category={product.category} className="h-56 w-56 text-slate-800" />
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
            {product.category}
          </span>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
            {product.name}
          </h1>
          <p className="mt-4 text-3xl font-bold text-slate-900">
            {formatPeso(product.price)}
          </p>
          <p className="mt-6 leading-relaxed text-slate-600">
            {product.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <AddToCartButton product={product} className="px-8 py-3 text-base" />
            <Link
              href="/cart"
              className="rounded-full border border-slate-300 px-8 py-3 text-base font-semibold text-slate-800 transition-colors hover:border-amber-500 hover:text-amber-600"
            >
              View Cart
            </Link>
          </div>

          <ul className="mt-10 space-y-2 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <li>✓ Free shipping on orders over ₱2,500</li>
            <li>✓ 30-day returns</li>
            <li>✓ Ethically made in the Philippines</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
