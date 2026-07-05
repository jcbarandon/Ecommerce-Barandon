import Link from "next/link";
import CategoryIcon from "./CategoryIcon";
import AddToCartButton from "./AddToCartButton";
import { formatPeso } from "@/lib/format";

export default function ProductCard({ product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/product/${product.id}`}
        className="flex items-center justify-center bg-slate-100 p-10 transition-colors duration-300 group-hover:bg-slate-950"
      >
        <CategoryIcon
          category={product.category}
          className="h-24 w-24 text-slate-800 transition-colors duration-300 group-hover:text-amber-500"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
          {product.category}
        </span>
        <Link href={`/product/${product.id}`}>
          <h3 className="mt-1 text-base font-semibold text-slate-900 hover:text-amber-600">
            {product.name}
          </h3>
        </Link>
        <p className="mt-3 text-lg font-bold text-slate-900">
          {formatPeso(product.price)}
        </p>
        <div className="mt-4">
          <AddToCartButton product={product} className="w-full" />
        </div>
      </div>
    </div>
  );
}
