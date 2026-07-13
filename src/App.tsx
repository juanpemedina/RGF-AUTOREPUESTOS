import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import { HomePage } from "./pages/HomePage";

// Catalog page
import { CatalogPage } from "./pages/CatalogPage";

export default function App() {
  return (
    <BrowserRouter basename="/RGF-AUTOREPUESTOS">      
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
