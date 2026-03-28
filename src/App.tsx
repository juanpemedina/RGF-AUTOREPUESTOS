import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";

// Home page components
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import {
  PopularSection,
  BestSellersSection,
  RecentSection,
} from "./components/Collections";
import { Features } from "./components/Features";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { CartDrawer } from "./components/CartDrawer";

// Catalog page
import { CatalogPage } from "./components/CatalogPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50 text-gray-900">
      <div className="relative isolate bg-black py-2 text-center text-sm text-white">
        <span>✨ Descuentos por nueva apertura !! 15%</span>
      </div>
      <Header />
      <CartDrawer />
      <Hero />
      <PopularSection />
      <BestSellersSection />
      <RecentSection />
      <Features />
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
