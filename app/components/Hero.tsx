"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax movement
  const y = useTransform(scrollY, [0, 500], [0, -120]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0">
        <motion.img
          src="/hero.jpg"
          className="w-full h-full object-cover"
          style={{ y }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
        />

        {/* DARK CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>

      {/* 🔥 BOTTOM FADE (KEY FIX) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-10" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }} // 👈 no delay (prevents empty gap)
        transition={{ duration: 1 }}
        className="relative text-center px-6 z-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
          <span className="block text-yellow-500">AN ARTIST</span>
          <span className="block text-yellow-500">
            FOR EVERY STYLE & VISION
          </span>
          <span className="block text-yellow-500">INK YOUR STORY</span>
        </h1>

        <p className="mt-6 text-white/80 text-sm md:text-base tracking-wide">
          Trusted • Reliable • Professional Tattoo Artists in Cagayan de Oro City
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