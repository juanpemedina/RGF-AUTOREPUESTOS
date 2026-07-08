// Home page components
import { Header } from "../components/layout/Header";
import { Hero } from "../components/home/Hero";
/*import {
  PopularSection,
  BestSellersSection,
  RecentSection,
} from "../components/home/Collections";*/
import { Features } from "../components/home/Features";
import { Newsletter } from "../components/home/Newsletter";
import { Footer } from "../components/layout/Footer";
import { BackToTop } from "../components/BackToTop";
import { CartDrawer } from "../components/CartDrawer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50 text-gray-900">
      <div className="relative isolate bg-black py-2 text-center text-sm text-white">
        <span>✨ Descuentos por nueva apertura !! 15%</span> {/*ToDO: Actualiza */}
      </div>
      <Header />
      <CartDrawer />
      <Hero />
{/*   <PopularSection />
      <BestSellersSection />     
      <RecentSection />
      */}  
      <Features />
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
}