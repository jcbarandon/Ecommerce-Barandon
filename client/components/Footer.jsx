import Link from "next/link";
import Logo from "./icons/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 text-slate-50">
            <Logo className="h-9 w-9 text-slate-50" showText={false} />
            <span className="font-bold tracking-wide">BARANDON INC.</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-slate-400">
            Heritage-crafted menswear, made in the Philippines for the modern
            Filipino man.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/category/shirts" className="hover:text-amber-500">Shirts</Link></li>
            <li><Link href="/category/caps" className="hover:text-amber-500">Caps</Link></li>
            <li><Link href="/category/shoes" className="hover:text-amber-500">Shoes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><span className="text-slate-400">Our Story</span></li>
            <li><span className="text-slate-400">Sustainability</span></li>
            <li><span className="text-slate-400">Contact</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Support</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><span className="text-slate-400">Shipping</span></li>
            <li><span className="text-slate-400">Returns</span></li>
            <li><span className="text-slate-400">Size Guide</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Barandon Inc. · Made with pride in the Philippines 🇵🇭
      </div>
    </footer>
  );
}
