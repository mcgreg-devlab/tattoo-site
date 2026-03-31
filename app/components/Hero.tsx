"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax effect
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-[100vh] overflow-hidden flex items-center justify-center text-white">
      
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="/artist2.jpg"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          INK YOUR STORY
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto text-lg">
          Premium tattoo artistry crafted with precision and passion.
        </p>
      </motion.div>
    </section>
  );
}