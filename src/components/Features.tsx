// import React from "react";
import { motion } from "framer-motion";
import { Clock, Mail, ShieldCheck, Wrench, Car } from "lucide-react";

import { Section } from "./Section";

export function Features() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Calidad garantizada",
      text: "Repuestos confiables que aseguran el rendimiento de tu vehículo.",
    },
    {
      icon: Wrench,
      title: "Amplio catálogo",
      text: "Encuentra todo tipo de repuestos para diferentes marcas y modelos.",
    },
    {
      icon: Clock,
      title: "Entrega rápida",
      text: "Disponibilidad inmediata para que no pierdas tiempo.",
    },
    {
      icon: Mail,
      title: "Atención personalizada",
      text: "Te asesoramos para encontrar exactamente lo que necesitas.",
    },
  ];

  return (
    <Section
      id="features"
      icon={<Car />}
      eyebrow="RGF Autorepuestos"
      title="Calidad y confianza en cada pieza."
      description="Nos enfocamos en ofrecer repuestos confiables y un servicio que realmente marque la diferencia."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <Icon className="h-6 w-6 text-[#981a20]" />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">{text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}