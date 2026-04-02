"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, -120]);

  return (
    <section className="relative h-screen flex items-center justify-center text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
  src="/hero.jpg"
  className="w-full h-full object-cover"
  style={{ y }}
  initial={{ scale: 1.1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 6 }}
/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
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