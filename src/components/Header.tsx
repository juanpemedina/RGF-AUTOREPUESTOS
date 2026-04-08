import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, BookOpenText, ShoppingCart, X } from "lucide-react";
import { navLinks } from "../data/products";
import logo from "../assets/logo_rgf.png";
import { useCart } from "./CartContext";

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { count, openCart } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="RGF Autorepuestos"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-[#981a20] transition"
            >
              {l.label}
            </a>
          ))}

          {/* Catálogo Productos */}
          <a
            href="/catalogo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#981a20] px-4 py-2 text-sm font-semibold text-white hover:bg-[#133e87] transition"
          >
            Catálogo
          </a>

          {/* Cart button */}
          <button
            onClick={openCart}
            aria-label="Abrir carrito"
            className="relative rounded-xl border p-2 text-gray-700 hover:bg-gray-50 transition"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#981a20] text-[10px] font-bold text-white"
              >
                {count > 9 ? "9+" : count}
              </motion.span>
            )}
          </button>
        </nav>

        {/* Mobile: cart + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={openCart}
            aria-label="Abrir carrito"
            className="relative rounded-xl border p-2 text-gray-700"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#981a20] text-[10px] font-bold text-white">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t bg-white md:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50"
                >
                  {l.label}
                </a>
              ))}

              {/* CTA Mobile */}
              <a
                href="/catalogo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#981a20] px-3 py-2 text-sm font-semibold text-white"
              >
                <BookOpenText className="h-4 w-4" />
                Catálogo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}