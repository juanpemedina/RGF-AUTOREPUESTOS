// import React from "react";
import { CartProvider } from "./components/CartContext";
import { CartDrawer } from "./components/CartDrawer";
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

export default function App() {
  return (
    <CartProvider>
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
    </CartProvider>
  );
}
