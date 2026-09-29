import { motion } from "framer-motion";
import { SquareUserRound, Instagram, MessageCircle, Mail } from "lucide-react";

import { Section } from "../Section";

export function Contacts() {
  const channels = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      text: "Atención rápida y cotizaciones al instante.",
      link: "https://wa.me/584225950978",
      actionText: "+58 422 595 0978",
    },
    {
      icon: Mail,
      title: "Correo electrónico",
      text: "Envíanos tus consultas o solicitudes de presupuesto.",
      link: "mailto:contacto@rgfautorepuestos.com",
      actionText: "contacto@rgfautorepuestos.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      text: "Síguenos para novedades, información y ofertas.",
      link: "https://www.instagram.com/autorepuestos_rgf/",
      actionText: "@AUTOREPUESTOS_RGF",
    },
  ];

  return (
    <Section
      id="contacto"
      icon={<SquareUserRound />}
      eyebrow="Nuestro contacto"
      title="Cómo encontrarnos"
      description="Estamos aquí para ayudarte. Contáctanos a través de nuestros canales de comunicación o visítanos directamente."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        
        {/* Columna Izquierda: Canales de contacto (Ocupa 7 de 12 columnas) */}
        <div className="flex flex-col gap-4 lg:col-span-7">
          {channels.map(({ icon: Icon, title, text, link, actionText }, index) => (
            <motion.a
              key={title}
              href={link}
              target={link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-start gap-4 rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
            >
              <div className="rounded-xl bg-[#981a20]/10 p-3 text-[#981a20] transition-transform group-hover:scale-105">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                  <span className="text-xs font-medium text-[#981a20] group-hover:underline">
                    {actionText} 
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{text}</p>
              </div>
            </motion.a>
          ))}

          {/* Banner complementario para llenar espacio visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-dashed border-gray-500 bg-gray-50/50 p-5 text-center"
          >
            <p className="text-sm text-gray-600">
              ¿Buscas una pieza específica? Escríbenos directamente a WhatsApp y con gusto te atenderemos.
            </p>
            </motion.div>
            <p className="text-lg font-medium py-4 text-center italic leading-relaxed text-[#981a20]">
                "Creemos que cada repuesto no es solo una pieza, sino un elemento clave en la vida útil y el rendimiento del automóvil."
            </p>
        </div>

        {/* Columna Derecha: Reel / Destacado de Instagram (Ocupa 5 de 12 columnas) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-sm overflow-hidden rounded-2xl border bg-white p-2 shadow-sm">
            <iframe
              src="https://www.instagram.com/p/DZTAhrQxTeG/embed"
              className="w-full rounded-xl"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            ></iframe>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}