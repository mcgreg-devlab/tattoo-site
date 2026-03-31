"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/artist2.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight gold-text glow">
        INK YOUR STORY
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg">
          Precision. Artistry. Identity.
        </p>

        <a
  href="/contact"
  className="inline-block mt-8 border border-[color:var(--gold)] text-[color:var(--gold)] px-8 py-3 text-sm tracking-widest hover:bg-[color:var(--gold)] hover:text-black transition"
>
  BOOK SESSION
</a>
      </motion.div>
    </section>
  );
}