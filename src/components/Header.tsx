import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { navLinks } from "../data/products";
import logo from "../assets/logo_rgf.png";

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
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

          {/* CTA */}
          <a
            href="https://wa.me/521XXXXXXXXXX?text=Hola,%20quiero%20cotizar%20un%20repuesto"
            target="_blank"
            className="rounded-xl bg-[#981a20] px-4 py-2 text-sm font-semibold text-white hover:bg-[#133e87] transition"
          >
            Cotizar
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
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
                href="https://wa.me/521XXXXXXXXXX"
                target="_blank"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#981a20] px-3 py-2 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}