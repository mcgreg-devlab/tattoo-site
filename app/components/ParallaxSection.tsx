"use client";

import { motion } from "framer-motion";

export function ParallaxSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">

     {/* 🎬 VIDEO BACKGROUND */}
<motion.video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
  initial={{ scale: 1.1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 12, ease: "easeOut" }}
>
  <source src="/ink-motion.mp4" type="video/mp4" />
</motion.video>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🎨 TEXTURE (same system as your site) */}
      <div className="absolute inset-0 bg-[url('/texture.jpg')] opacity-25 mix-blend-overlay" />

      {/* ✨ LIGHT SWEEP (subtle animation) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20 animate-pulse" />

      {/* 🔝 TOP BLEND */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />

      {/* 🔻 BOTTOM BLEND */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

      {/* 🧠 CONTENT */}
      <div className="relative z-10 text-center px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-wide transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
        >
          ART IN MOTION
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-white/70 text-lg"
        >
          Watch our artists bring ideas to life.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="/artists"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="inline-block mt-6 border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition duration-300"
        >
          MEET THE ARTIST →
        </motion.a>

      </div>
    </section>
  );
}