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
    name: "LIMPIADOR DE INYECTORES SENFINECO 9986",
    price: 9,
    image:
      "https://dojiw2m9tvv09.cloudfront.net/30196/product/9986_injector_cleaner9806.png?113&time=1758804061", 
    tags: ["aditivo"],
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "SENFINECO",
  },
  {
    id: 2,
    name: "LIMPIADOR DEL SISTEMA DE COMBUSTIBLE SENFINECO 9997",
    price: 10,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.RV1DvRa9fZgUKH2AAQBhCgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: ["limpiador de combustible"], 
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "SENFINECO",
  },
  {
    id: 3,
    name: "ELEVADOR DE OCTANAJE SENFINECO 9948",
    price: 10,
    image:
      "https://senfineco.com.ua/wp-content/uploads/2025/02/9948.png", 
    tags: ["aditivo"],
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "SENFINECO",
  },
  {
    id: 4,
    name: "MOTUL 4100 SYN-NERGY SPEC 10W40 4X5L SEMI-SINTETICO",
    price: 80,
    image:
      "https://imgs.search.brave.com/nYEx02OGE06jKGYiX9pcPeZGVr8GqYeEE6jFw-sn5q4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY2Ru/LXVzLm1pdGllbmRh/bnViZS5jb20vc3Rv/cmVzLzAwNi8zNDcv/OTEzL3Byb2R1Y3Rz/L2RfbnFfbnBfNjQx/MzAyLW1sYTg5MDcz/NDgzNDI5XzA3MjAy/NS1mLWZjMjQ2ZTgw/YmJlN2QyMTg3MzE3/NTgwNDM2NTk3NjQ3/LTQ4MC0wLndlYnA", 
    tags: ["lubricante", "semi-sintético"],
    
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "MOTUL",
  },
  {
    id: 5,
    name: "MOTUL 8100 ECO-CLEAN 0W20 12X1L 100% SINTETICO",
    price: 25,
    image:
      "https://imgs.search.brave.com/nYEx02OGE06jKGYiX9pcPeZGVr8GqYeEE6jFw-sn5q4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY2Ru/LXVzLm1pdGllbmRh/bnViZS5jb20vc3Rv/cmVzLzAwNi8zNDcv/OTEzL3Byb2R1Y3Rz/L2RfbnFfbnBfNjQx/MzAyLW1sYTg5MDcz/NDgzNDI5XzA3MjAy/NS1mLWZjMjQ2ZTgw/YmJlN2QyMTg3MzE3/NTgwNDM2NTk3NjQ3/LTQ4MC0wLndlYnA", 
    tags: ["lubricante", "sintético"],
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "MOTUL",
  },
  {
    id: 6,
    name: "MOTUL 8100 ECO-LITE 5W20 12X1L 100% SINTETICO",
    price: 18,
    image:
      "https://imgs.search.brave.com/nYEx02OGE06jKGYiX9pcPeZGVr8GqYeEE6jFw-sn5q4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY2Ru/LXVzLm1pdGllbmRh/bnViZS5jb20vc3Rv/cmVzLzAwNi8zNDcv/OTEzL3Byb2R1Y3Rz/L2RfbnFfbnBfNjQx/MzAyLW1sYTg5MDcz/NDgzNDI5XzA3MjAy/NS1mLWZjMjQ2ZTgw/YmJlN2QyMTg3MzE3/NTgwNDM2NTk3NjQ3/LTQ4MC0wLndlYnA", 
    tags: ["lubricante", "sintético"],
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "MOTUL",
  },
  {
    id: 7,
    name: "MOTUL 8100 ECO-LITE 5W30 12X1L 100% SINTETICO",
    price: 20,
    image:
      "https://imgs.search.brave.com/nYEx02OGE06jKGYiX9pcPeZGVr8GqYeEE6jFw-sn5q4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY2Ru/LXVzLm1pdGllbmRh/bnViZS5jb20vc3Rv/cmVzLzAwNi8zNDcv/OTEzL3Byb2R1Y3Rz/L2RfbnFfbnBfNjQx/MzAyLW1sYTg5MDcz/NDgzNDI5XzA3MjAy/NS1mLWZjMjQ2ZTgw/YmJlN2QyMTg3MzE3/NTgwNDM2NTk3NjQ3/LTQ4MC0wLndlYnA", 
    tags: ["lubricante", "sintético"],
    addedAt: "2026-07-07",
    category: "Motor",
    brand: "MOTUL",
  },
];

const baseUrl = import.meta.env.BASE_URL;

export const navLinks = [
  {href: `${baseUrl}#hero`, label: "Inicio" },
  /*{href: "/#popular", label: "Populares" },
  { href: "/#bestsellers", label: "Más Vendidos" },*/
  { href: `${baseUrl}#features`, label: "¿Por qué nosotros?" },
  { href: `${baseUrl}#contacto`, label: "Contacto" },
];

export const formatPrice = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
