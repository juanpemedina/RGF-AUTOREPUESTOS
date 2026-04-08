import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../../assets/logo_rgf.png";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="RGF Autorepuestos" className="h-8 w-auto" />
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Repuestos automotrices de calidad para garantizar el rendimiento y
            seguridad de tu vehículo.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-sm font-semibold">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#981a20]" />
              <a
                href="https://wa.me/521XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#981a20]"
              >
                WhatsApp
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#981a20]" />
              contacto@rgf.com
            </li>

            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-[#981a20]" />
              <span>
                direccion , caracas, Venezuela...
              </span>
            </li>
          </ul>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-sm font-semibold">Enlaces</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>
              <a href="#popular" className="hover:text-[#981a20]">
                Productos
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-[#981a20]">
                ¿Por qué nosotros?
              </a>
            </li>
            <li>
              <a href="#ubicacion" className="hover:text-[#981a20]">
                Ubicación
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} RGF Autorepuestos. Todos los derechos reservados.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#981a20]">
              Privacidad
            </a>
            <a href="#" className="hover:text-[#981a20]">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}