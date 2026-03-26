import React from "react";
import { Section } from "./Section";

export function Newsletter() {
  return (
    <Section
      id="ubicacion"
      eyebrow="Ubicación"
      title="Visítanos"
      description="Puedes visitarnos en nuestra sucursal o ubicarnos fácilmente en el mapa."
    >
      <div className="mx-auto max-w-4xl space-y-6">
        
        {/* Texto */}
        <p className="text-center text-gray-700">
          Torre Adamant 1, Puebla, AQUI VA LA UBI REAL.
        </p>

        {/* Mapa */}
        <div className="overflow-hidden rounded-2xl shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.2532470685164!2d-98.26721638915068!3d19.00855918210789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc77f52299ee1%3A0x5ae337d3569ff1e8!2sTorre%20Adamant%201%2C%20Puebla!5e0!3m2!1ses!2smx!4v1774565957187!5m2!1ses!2smx"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>

        {/* Nota */}
        <p className="text-center text-xs text-gray-500">
          También puedes contactarnos por WhatsApp para cotizar sin necesidad de acudir físicamente.
        </p>
      </div>
    </Section>
  );
}