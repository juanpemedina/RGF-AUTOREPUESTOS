/*import React from "react";*/
import { Instagram, Phone, Mail } from "lucide-react";
import logo from "../../assets/logo_rgf.png";
import { WHATSAPP_NUMBER } from "../../data/contact";
import { navLinks } from "../../data/products";


export function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

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
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#981a20]"
              >
                0422 5950978
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#981a20]" />
              <a
                href="mailto:contacto@rgfautorepuestos.com"
                className="hover:text-[#981a20]"
              >
                contacto@rgfautorepuestos.com
              </a>
            </li>

            <li className="flex items-start gap-2">
              <Instagram className="h-4 w-4 mt-0.5 text-[#981a20]" />
              <a
                href="https://www.instagram.com/autorepuestos_rgf/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#981a20]"
              >
                @AUTOREPUESTOS_RGF
              </a>
            </li>
          </ul>
        </div>

        {/* Navegación */}             
        <div>
          <h4 className="text-sm font-semibold">Enlaces</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a 
                  href={l.href} 
                  className="hover:text-[#981a20] transition-colors duration-150"
                >
                  {l.label}
                </a>
              </li>
              
            ))}
            <li>
                <a href={`${baseUrl}catalogo`}>Catálogo</a>
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