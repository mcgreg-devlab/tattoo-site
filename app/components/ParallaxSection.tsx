"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [300, 800], [0, -150]);

  return (
    <section className="relative h-[70vh] overflow-hidden">
      <motion.img
        src="/artist1.jpg"
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <h2 className="text-5xl font-bold tracking-wide">
          ART IN MOTION
        </h2>
      </div>
    </section>
  );
}