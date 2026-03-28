import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { products, CATEGORIES, BRANDS } from "../data/products";
import type { Category, Brand } from "../data/products";
import { ProductCard } from "./ProductCard";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartDrawer } from "./CartDrawer";
import { BackToTop } from "./BackToTop";

export function CatalogPage() {
  const [activeCategories, setActiveCategories] = useState<Category[]>([]);
  const [activeBrands, setActiveBrands] = useState<Brand[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (cat: Category) =>
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const toggleBrand = (brand: Brand) =>
    setActiveBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );

  const clearFilters = () => {
    setActiveCategories([]);
    setActiveBrands([]);
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catOk =
        activeCategories.length === 0 || activeCategories.includes(p.category);
      const brandOk =
        activeBrands.length === 0 || activeBrands.includes(p.brand);
      return catOk && brandOk;
    });
  }, [activeCategories, activeBrands]);

  const hasFilters = activeCategories.length > 0 || activeBrands.length > 0;

  return (
    <>
      <Header />
      <CartDrawer />

      <main className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
        {/* Page header */}
        <div className="border-b bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Catálogo de repuestos
            </h1>
            <p className="mt-2 text-gray-600">
              {filtered.length} producto{filtered.length !== 1 ? "s" : ""}{" "}
              encontrado{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* ── SIDEBAR (desktop) ───────────────────────────────────── */}
            <aside className="hidden w-56 flex-shrink-0 lg:block">
              <FilterPanel
                activeCategories={activeCategories}
                activeBrands={activeBrands}
                toggleCategory={toggleCategory}
                toggleBrand={toggleBrand}
                clearFilters={clearFilters}
                hasFilters={hasFilters}
              />
            </aside>

            {/* ── MAIN CONTENT ────────────────────────────────────────── */}
            <div className="flex-1">
              {/* Mobile filter toggle */}
              <div className="mb-4 flex items-center justify-between lg:hidden">
                <button
                  onClick={() => setShowFilters(true)}
                  className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filtros
                  {hasFilters && (
                    <span className="rounded-full bg-[#981a20] px-1.5 py-0.5 text-[10px] text-white">
                      {activeCategories.length + activeBrands.length}
                    </span>
                  )}
                </button>
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-500 hover:text-[#981a20]"
                  >
                    Limpiar filtros
                  </button>
                )}
              </div>

              {/* Active filter chips */}
              {hasFilters && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {activeCategories.map((c) => (
                    <button
                      key={c}
                      onClick={() => toggleCategory(c)}
                      className="flex items-center gap-1 rounded-full bg-[#981a20]/10 px-3 py-1 text-xs font-medium text-[#981a20]"
                    >
                      {c} <X className="h-3 w-3" />
                    </button>
                  ))}
                  {activeBrands.map((b) => (
                    <button
                      key={b}
                      onClick={() => toggleBrand(b)}
                      className="flex items-center gap-1 rounded-full bg-[#133e87]/10 px-3 py-1 text-xs font-medium text-[#133e87]"
                    >
                      {b} <X className="h-3 w-3" />
                    </button>
                  ))}
                </div>
              )}

              {/* Grid */}
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-3 py-24 text-center text-gray-400">
                  <SlidersHorizontal className="h-10 w-10 opacity-30" />
                  <p className="text-sm">No hay productos con esos filtros.</p>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[#981a20] hover:underline"
                  >
                    Limpiar filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((p, i) => (
                    <ProductCard
                      key={p.id}
                      product={p}
                      index={i}
                      eager // ← carga inmediata sin esperar scroll
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            />
            <motion.div
              key="mobile-filters"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b px-5 py-4">
                <h2 className="font-semibold">Filtros</h2>
                <button onClick={() => setShowFilters(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5">
                <FilterPanel
                  activeCategories={activeCategories}
                  activeBrands={activeBrands}
                  toggleCategory={toggleCategory}
                  toggleBrand={toggleBrand}
                  clearFilters={clearFilters}
                  hasFilters={hasFilters}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
      <BackToTop />
    </>
  );
}

// ── Filter panel ─────────────────────────────────────────────────────────────
interface FilterPanelProps {
  activeCategories: Category[];
  activeBrands: Brand[];
  toggleCategory: (c: Category) => void;
  toggleBrand: (b: Brand) => void;
  clearFilters: () => void;
  hasFilters: boolean;
}

function FilterPanel({
  activeCategories,
  activeBrands,
  toggleCategory,
  toggleBrand,
  clearFilters,
  hasFilters,
}: FilterPanelProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          Filtrar por
        </h3>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-[#981a20] hover:underline"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Categories */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Categoría
        </p>
        <div className="space-y-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                activeCategories.includes(cat)
                  ? "bg-[#981a20] text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
              {activeCategories.includes(cat) && <X className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Marca
        </p>
        <div className="space-y-1">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => toggleBrand(brand)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                activeBrands.includes(brand)
                  ? "bg-[#133e87] text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {brand}
              {activeBrands.includes(brand) && <X className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
