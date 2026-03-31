"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white">
      
      <div className="absolute inset-0">
        <img src="/hero.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6"
      >
        <h1 className="text-6xl font-extrabold">Ink Your Story</h1>

        <p className="mt-4 text-gray-300">
          Custom tattoos by experienced artists
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 bg-white text-black px-10 py-4"
        >
          Book Now
        </a>
      </motion.div>
    </section>
  );
}