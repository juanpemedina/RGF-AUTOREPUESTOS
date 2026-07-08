import { motion } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import type { Product } from "../../data/products";
import { formatPrice } from "../../data/products";
import { useCart } from "../CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
  eager?: boolean;
}

export function ProductCard({ product, index = 0, eager = false }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const animationProps = eager
    ? {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3, delay: index * 0.05 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.35, delay: index * 0.04 },
      };

  return (
    <motion.div
      {...animationProps}
      className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-xl"
    >
      {/* ── SECCIÓN IMAGEN ────────────────────────────────────────── */}
      <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Tags y Marca (Más pequeños en móvil) */}
        <div className="absolute left-2 top-2 flex flex-wrap gap-1 sm:left-3 sm:top-3 sm:gap-1.5">
          {product.tags?.slice(0, 1).map((t) => (
            <span
              key={t}
              className="rounded-full bg-black/80 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-white sm:px-2.5 sm:py-1 sm:text-[10px]"
            >
              {t}
            </span>
          ))}
          <span className="rounded-full bg-[#133e87]/90 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white sm:px-2.5 sm:py-1 sm:text-[10px]">
            {product.brand}
          </span>
        </div>
      </div>

      {/* ── DETALLES DEL PRODUCTO ──────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        {/* Categoría */}
        <span className="mb-1 inline-block w-fit rounded-full border px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-gray-500 sm:mb-2 sm:text-[10px]">
          {product.category}
        </span>

        {/* Título y Precio (Adaptable a 2 columnas) */}
        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <h3 className="line-clamp-2 text-xs font-bold leading-tight text-gray-900 sm:text-base sm:font-semibold min-h-[2rem] sm:min-h-0">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-1 sm:flex-col sm:items-end sm:gap-0">
            <p className="text-sm font-bold text-[#981a20] sm:text-lg sm:text-gray-900">
              {formatPrice(product.price)}
            </p>
            <p className="text-[9px] text-gray-400 uppercase">USD</p>
          </div>
        </div>

        {/* ── BOTÓN DE ACCIÓN ───────────────────────────────────────── */}
        <div className="mt-auto">
          <button
            onClick={handleAdd}
            className={`flex w-full items-center justify-center gap-2 rounded-lg px-2 py-2 text-xs font-semibold text-white transition-all duration-300 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm ${
              added
                ? "bg-green-600"
                : "bg-[#981a20] hover:bg-[#133e87]"
            }`}
          >
            {added ? (
              <>
                <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Añadido</span>
              </>
            ) : (
              <>
                <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="truncate">
                  <span className="sm:hidden">Añadir</span>
                  <span className="hidden sm:inline">Añadir al carrito</span>
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}