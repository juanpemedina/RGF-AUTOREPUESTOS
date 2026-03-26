import { useMemo } from "react";
import { Section } from "./Section";
import { products as all } from "../data/products";
import type { Product } from "../data/products";
import { ProductGrid } from "./ProductGrid";

export function PopularSection() {
  const items = useMemo<Product[]>(
    () => all.filter((p) => p.tags?.includes("popular")).slice(0, 8),
    []
  );
  return (
    <Section
      id="popular"
      eyebrow="Tendencia"
      title="Populares"
      description="Productos que siempre van bien tener"
    >
      <ProductGrid items={items} />
    </Section>
  );
}

export function BestSellersSection() {
  const items = useMemo<Product[]>(
    () => all.filter((p) => p.tags?.includes("bestseller")).slice(0, 8),
    []
  );
  return (
    <Section
      id="bestsellers"
      eyebrow="Lo mejor"
      title="Más Vendidos"
      description="Nuestros productos de calidad que enamoran clientes"
    >
      <ProductGrid items={items} />
    </Section>
  );
}

export function RecentSection() {
  const items = useMemo<Product[]>(
    () =>
      all
        .slice()
        .sort(
          (a, b) =>
            new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
        )
        .slice(0, 8),
    []
  );
  return (
    <Section
      id="recent"
      eyebrow="Recien llegados"
      title="Recientes"
      description="Nuestros productos más recientes"
    >
      <ProductGrid items={items} />
    </Section>
  );
}
