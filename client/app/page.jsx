import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();
  const featured = products.slice(0, 4);

  return (
    <main>
      <Hero />
      <CategoryGrid />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Featured</h2>
          <p className="mt-2 text-slate-500">A taste of the collection.</p>
        </div>

        {featured.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">
            No products available. Make sure the Express API is running on port 5000.
          </p>
        )}
      </section>
    </main>
  );
}
