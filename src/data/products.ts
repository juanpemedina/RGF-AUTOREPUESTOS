export type Category =
  | "Motor";

export type Brand = "SENFINECO" | "MOTUL";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  tags: string[];
  addedAt: string; // ISO
  category: Category;
  brand: Brand;
};

export const CATEGORIES: Category[] = [
  "Motor",
];

export const BRANDS: Brand[] = ["SENFINECO", "MOTUL"];

export const products: Product[] = [
  {
    id: 1,
    name: "SENFINECO FUEL INJECTOR CLEANER 24X300ML LIMPIA INYECTORES PARA GASOLINA",
    price: 1,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: ["aditivo"],
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "SENFINECO",
  },
  {
    id: 2,
    name: "SENFINECO MAXCLEANE FUEL SYSTEM CLEANER 24X300ML LIMPIADOR DEL SISTEMA DE COMBUSTIBLE",
    price: 1,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: ["aditivo"],
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "SENFINECO",
  },
  {
    id: 3,
    name: "SENFINECO POWER UP OCTANE BOOSTER 24X300ML AUMENTADOR DE OCTANAJE",
    price: 1,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: ["aditivo"],
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "SENFINECO",
  },
  {
    id: 4,
    name: "MOTUL 4100 SYN-NERGY SPEC 10W40 4X5L SEMI-SINTETICO",
    price: 1,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: ["lubricante"],
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "MOTUL",
  },
  {
    id: 5,
    name: "MOTUL 8100 ECO-CLEAN 0W20 12X1L 100% SINTET",
    price: 1,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: ["lubricante"],
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "MOTUL",
  },
  {
    id: 6,
    name: "MOTUL 8100 ECO-LITE 5W20 12X1L 100% SINTET",
    price: 1,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: ["lubricante"],
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "MOTUL",
  },
  {
    id: 7,
    name: "MOTUL 8100 ECO-LITE 5W30 12X1L 100% SINTET",
    price: 1,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: ["lubricante"],
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "MOTUL",
  },
];

export const navLinks = [
  {href: "/#hero", label: "Inicio" },
  /*{href: "/#popular", label: "Populares" },
  { href: "/#bestsellers", label: "Más Vendidos" },*/
  { href: "/#features", label: "¿Por qué nosotros?" },
  { href: "/#ubicacion", label: "Ubicación" },
];

export const formatPrice = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
