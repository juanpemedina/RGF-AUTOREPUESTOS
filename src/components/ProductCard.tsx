import { motion } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import type { Product } from "../data/products";
import { formatPrice } from "../data/products";
import { useCart } from "./CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Tags */}
        <div className="absolute left-3 top-3 flex gap-2">
          {product.tags?.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full bg-black/80 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">{formatPrice(product.price)}</p>
            <p className="text-xs text-gray-500">USD</p>
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAdd}
          className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-white transition-all duration-300 ${
            added
              ? "bg-green-600 hover:bg-green-600"
              : "bg-[#981a20] hover:bg-[#133e87]"
          }`}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" />
              Añadido
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              Añadir al carrito
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
