import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/api";

const CATEGORY_META = {
  shirts: {
    title: "Shirts",
    blurb: "Barong-inspired formalwear and heritage casuals.",
  },
  caps: {
    title: "Caps",
    blurb: "Sun-and-stars embroidery, built for the outdoors.",
  },
  shoes: {
    title: "Shoes",
    blurb: "Woven-textile kicks made for the streets.",
  },
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_META).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }) {
  const { slug } = params;
  const meta = CATEGORY_META[slug];
  if (!meta) notFound();

  const products = await getProductsByCategory(slug);

  return (
    <main className="mx-auto max-w-7xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">
          {meta.title}
        </h1>
        <p className="mt-2 text-slate-500">{meta.blurb}</p>
      </header>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-slate-500">
          No products in this category yet. Make sure the Express API is running
          on port 5000.
        </p>
      )}
    </main>
  );
}
