import Link from "next/link";
import ShirtIcon from "./icons/ShirtIcon";
import CapIcon from "./icons/CapIcon";
import ShoeIcon from "./icons/ShoeIcon";

const categories = [
  {
    name: "Shirts",
    href: "/category/shirts",
    Icon: ShirtIcon,
    description: "Barong-inspired fits, everyday essentials.",
  },
  {
    name: "Caps",
    href: "/category/caps",
    Icon: CapIcon,
    description: "Sun-motif embroidery, built for the outdoors.",
  },
  {
    name: "Shoes",
    href: "/category/shoes",
    Icon: ShoeIcon,
    description: "Pintados-patterned soles, made for the streets.",
  },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Shop by Category</h2>
        <p className="mt-2 text-slate-500">
          Heritage-crafted essentials for the modern Filipino man.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {categories.map(({ name, href, Icon, description }) => (
          <Link
            key={name}
            href={href}
            className="group relative flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-amber-500 hover:shadow-lg"
          >
            <Icon className="h-16 w-16 text-slate-800 transition-colors duration-300 group-hover:text-amber-500" />
            <h3 className="mt-6 text-xl font-semibold text-slate-900">{name}</h3>
            <p className="mt-2 text-sm text-slate-500">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
