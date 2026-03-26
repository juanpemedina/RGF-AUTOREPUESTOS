export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  tags: string[];
  addedAt: string; // ISO
};

export const products: Product[] = [
  {
    id: 1,
    name: "Amortiguadores RGF",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
    tags: ["popular"],
    addedAt: "2025-10-01",
  },
  {
    id: 2,
    name: "Pastillas de freno RGF",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
    tags: ["bestseller"],
    addedAt: "2025-09-20",
  },
  {
    id: 3,
    name: "Filtros de aire RGF",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
    tags: ["reciente"],
    addedAt: "2025-10-05",
  },
  {
    id: 4,
    name: "Aceite sintético RGF",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1200&auto=format&fit=crop",
    tags: ["popular"],
    addedAt: "2025-10-03",
  },
  {
    id: 5,
    name: "Batería automotriz RGF",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1200&auto=format&fit=crop",
    tags: ["bestseller"],
    addedAt: "2025-09-15",
  },
  {
    id: 6,
    name: "Kit de suspensión RGF",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1200&auto=format&fit=crop",
    tags: ["popular"],
    addedAt: "2025-10-07",
  },
  {
    id: 7,
    name: "Bujías RGF",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1200&auto=format&fit=crop",
    tags: ["bestseller","reciente"],
    addedAt: "2025-10-06",
  },
  {
    id: 8,
    name: "Radiador RGF",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop",
    tags: ["bestseller", "popular"],
    addedAt: "2025-09-10",
  },

  
];

export const navLinks = [
  { href: "#productos", label: "Productos" },
  { href: "#popular", label: "Populares" },
  { href: "#bestsellers", label: "Más Vendidos" },
  { href: "#features", label: "¿Por qué nosotros?" },
  { href: "#ubicacion", label: "Ubicación" },
];

export const formatPrice = (n: number) => `$${n.toFixed(2)}`;