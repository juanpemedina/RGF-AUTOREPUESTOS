import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Wrench } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-tr from-[#133e87]/20 to-transparent blur-3xl" />
        <div className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-gradient-to-tr from-[#981a20]/20 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-24 lg:px-8">
        
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="order-2 space-y-6 lg:order-1 lg:col-span-6"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            <ShieldCheck className="h-3.5 w-3.5 text-[#981a20]" />
            Calidad garantizada
          </span>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Calidad que se mueve contigo
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-600">
            En RGF Autorepuestos ofrecemos repuestos confiables para garantizar
            el rendimiento, la seguridad y la durabilidad de tu vehículo.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/521XXXXXXXXXX?text=Hola,%20quiero%20cotizar%20un%20repuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#981a20] px-5 py-3 text-white font-semibold hover:bg-[#133e87] transition"
            >
              Cotizar ahora <ChevronRight className="h-4 w-4" />
            </a>

            <a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-medium hover:bg-gray-100"
            >
              Ver productos
            </a>
          </div>

          {/* Trust points */}
          <div className="flex items-center gap-6 pt-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#133e87]" />
              Garantía en productos
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="h-4 w-4 text-[#133e87]" />
              Asesoría especializada
            </div>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="order-1 lg:order-2 lg:col-span-6"
        >
          <div className="relative mx-auto aspect-[5/6] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1677009541707-c805a3ddf197?q=80&w=2070&auto=format&fit=crop"
              alt="Repuestos automotrices"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2 text-sm shadow-sm"
            >
              Repuestos de alta calidad
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}