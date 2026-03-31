"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center text-center px-4">
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Ink Your Story
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-400"
      >
        Professional tattoo artists delivering stunning designs.
      </motion.p>

    </section>
  );
}