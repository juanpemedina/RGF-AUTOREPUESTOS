export type Category =
  | "Frenos"
  | "Suspensión"
  | "Motor"
  | "Eléctrico"
  | "Filtros"
  | "Transmisión";

export type Brand = "Castrol" | "Monroe" | "Bosch" | "NGK";

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
  "Frenos",
  "Suspensión",
  "Motor",
  "Eléctrico",
  "Filtros",
  "Transmisión",
];

export const BRANDS: Brand[] = ["Castrol", "Monroe", "Bosch", "NGK"];

export const products: Product[] = [
  // ── FRENOS ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Pastillas de freno delanteras",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
    tags: ["bestseller"],
    addedAt: "2025-09-20",
    category: "Frenos",
    brand: "Bosch",
  },
  {
    id: 2,
    name: "Pastillas de freno traseras",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
    tags: ["popular"],
    addedAt: "2025-10-01",
    category: "Frenos",
    brand: "Bosch",
  },
  {
    id: 3,
    name: "Disco de freno ventilado",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
    tags: ["popular"],
    addedAt: "2025-10-10",
    category: "Frenos",
    brand: "Bosch",
  },
  {
    id: 4,
    name: "Líquido de frenos DOT4",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: [],
    addedAt: "2025-10-12",
    category: "Frenos",
    brand: "Castrol",
  },

  // ── SUSPENSIÓN ───────────────────────────────────────────────────────────────
  {
    id: 5,
    name: "Amortiguadores delanteros",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
    tags: ["popular"],
    addedAt: "2025-10-01",
    category: "Suspensión",
    brand: "Monroe",
  },
  {
    id: 6,
    name: "Amortiguadores traseros",
    price: 849,
    image:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1200&auto=format&fit=crop",
    tags: [],
    addedAt: "2025-10-02",
    category: "Suspensión",
    brand: "Monroe",
  },
  {
    id: 7,
    name: "Kit de suspensión completo",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1200&auto=format&fit=crop",
    tags: ["popular", "bestseller"],
    addedAt: "2025-10-07",
    category: "Suspensión",
    brand: "Monroe",
  },
  {
    id: 8,
    name: "Barra estabilizadora",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop",
    tags: [],
    addedAt: "2025-09-28",
    category: "Suspensión",
    brand: "Monroe",
  },

  // ── MOTOR ────────────────────────────────────────────────────────────────────
  {
    id: 9,
    name: "Aceite sintético 5W-30",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: ["popular", "bestseller"],
    addedAt: "2025-10-03",
    category: "Motor",
    brand: "Castrol",
  },
  {
    id: 10,
    name: "Aceite sintético 10W-40",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: ["popular"],
    addedAt: "2025-10-04",
    category: "Motor",
    brand: "Castrol",
  },
  {
    id: 11,
    name: "Empaque de cabeza de motor",
    price: 1100,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
    tags: [],
    addedAt: "2025-09-18",
    category: "Motor",
    brand: "Bosch",
  },
  {
    id: 12,
    name: "Correa de distribución",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop",
    tags: ["bestseller"],
    addedAt: "2025-09-22",
    category: "Motor",
    brand: "Bosch",
  },
  {
    id: 13,
    name: "Termostato de motor",
    price: 380,
    image:
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1200&auto=format&fit=crop",
    tags: [],
    addedAt: "2025-10-09",
    category: "Motor",
    brand: "Bosch",
  },

  // ── ELÉCTRICO ────────────────────────────────────────────────────────────────
  {
    id: 14,
    name: "Batería automotriz 60Ah",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1200&auto=format&fit=crop",
    tags: ["bestseller"],
    addedAt: "2025-09-15",
    category: "Eléctrico",
    brand: "Bosch",
  },
  {
    id: 15,
    name: "Batería automotriz 45Ah",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1200&auto=format&fit=crop",
    tags: [],
    addedAt: "2025-09-16",
    category: "Eléctrico",
    brand: "Bosch",
  },
  {
    id: 16,
    name: "Bujías de iridio",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1200&auto=format&fit=crop",
    tags: ["bestseller"],
    addedAt: "2025-10-06",
    category: "Eléctrico",
    brand: "NGK",
  },
  {
    id: 17,
    name: "Bujías de platino",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1200&auto=format&fit=crop",
    tags: ["popular"],
    addedAt: "2025-10-05",
    category: "Eléctrico",
    brand: "NGK",
  },
  {
    id: 18,
    name: "Sensor de oxígeno",
    price: 520,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
    tags: [],
    addedAt: "2025-09-30",
    category: "Eléctrico",
    brand: "Bosch",
  },
  {
    id: 19,
    name: "Alternador reconstruido",
    price: 1350,
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop",
    tags: [],
    addedAt: "2025-09-25",
    category: "Eléctrico",
    brand: "Bosch",
  },

  // ── FILTROS ───────────────────────────────────────────────────────────────────
  {
    id: 20,
    name: "Filtro de aire de motor",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
    tags: ["popular"],
    addedAt: "2025-10-05",
    category: "Filtros",
    brand: "Bosch",
  },
  {
    id: 21,
    name: "Filtro de aceite",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
    tags: ["bestseller", "popular"],
    addedAt: "2025-10-08",
    category: "Filtros",
    brand: "Castrol",
  },
  {
    id: 22,
    name: "Filtro de combustible",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: [],
    addedAt: "2025-09-27",
    category: "Filtros",
    brand: "Bosch",
  },
  {
    id: 23,
    name: "Filtro de habitáculo",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
    tags: [],
    addedAt: "2025-10-11",
    category: "Filtros",
    brand: "Bosch",
  },

  // ── TRANSMISIÓN ───────────────────────────────────────────────────────────────
  {
    id: 24,
    name: "Radiador de motor",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop",
    tags: ["bestseller", "popular"],
    addedAt: "2025-09-10",
    category: "Transmisión",
    brand: "Castrol",
  },
  {
    id: 25,
    name: "Kit de embrague completo",
    price: 2100,
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
    tags: ["popular"],
    addedAt: "2025-09-12",
    category: "Transmisión",
    brand: "Monroe",
  },
  {
    id: 26,
    name: "Aceite para transmisión ATF",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: [],
    addedAt: "2025-10-13",
    category: "Transmisión",
    brand: "Castrol",
  },
  {
    id: 27,
    name: "Sello de transmisión",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1200&auto=format&fit=crop",
    tags: [],
    addedAt: "2025-09-29",
    category: "Transmisión",
    brand: "Bosch",
  },
];

export const navLinks = [
  { href: "/catalogo", label: "Productos" },
  { href: "/#popular", label: "Populares" },
  { href: "/#bestsellers", label: "Más Vendidos" },
  { href: "/#features", label: "¿Por qué nosotros?" },
  { href: "/#ubicacion", label: "Ubicación" },
];

export const formatPrice = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
