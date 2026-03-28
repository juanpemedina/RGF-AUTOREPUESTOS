import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "./CartContext";
import { formatPrice } from "../data/products";

const WHATSAPP_NUMBER = "584242756396"; // ← Cambia por tu número real

function buildWhatsAppMessage(
  items: { product: { name: string; price: number }; quantity: number }[],
  total: number
): string {
  const lines = items.map(
    (i) =>
      `• ${i.product.name} x${i.quantity} — ${formatPrice(i.product.price * i.quantity)}`
  );
  return [
    "Hola, me gustaría hacer el siguiente pedido:",
    "",
    ...lines,
    "",
    `*Total: ${formatPrice(total)}*`,
  ].join("\n");
}

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, total, clearCart } =
    useCart();

  const handleOrder = () => {
    const msg = buildWhatsAppMessage(items, total);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-[#981a20]" />
                <h2 className="text-base font-semibold">Tu carrito</h2>
                {items.length > 0 && (
                  <span className="rounded-full bg-[#981a20] px-2 py-0.5 text-xs text-white">
                    {items.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-gray-400">
                  <ShoppingBag className="h-12 w-12 opacity-30" />
                  <p className="text-sm">Tu carrito está vacío.</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  <AnimatePresence initial={false}>
                    {items.map(({ product, quantity }) => (
                      <motion.li
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        className="flex gap-4 rounded-2xl border bg-gray-50 p-3"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                        />
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-medium leading-tight">
                              {product.name}
                            </p>
                            <button
                              onClick={() => removeItem(product.id)}
                              className="text-gray-400 hover:text-[#981a20]"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-[#981a20]">
                              {formatPrice(product.price * quantity)}
                            </p>
                            {/* Qty controls */}
                            <div className="flex items-center gap-1 rounded-lg border bg-white px-1">
                              <button
                                onClick={() => updateQty(product.id, -1)}
                                className="p-1 text-gray-600 hover:text-[#981a20]"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="w-5 text-center text-sm font-medium">
                                {quantity}
                              </span>
                              <button
                                onClick={() => updateQty(product.id, 1)}
                                className="p-1 text-gray-600 hover:text-[#133e87]"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t px-5 py-5 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold text-lg">{formatPrice(total)}</span>
                </div>

                <button
                  onClick={handleOrder}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#981a20] py-3 text-sm font-semibold text-white transition hover:bg-[#133e87]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Ordenar por WhatsApp
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs text-gray-400 hover:text-[#981a20] transition"
                >
                  Vaciar carrito
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
