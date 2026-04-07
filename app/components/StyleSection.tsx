"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StyleSection() {
  const styles = [
    {
      title: "BLACK & GREY",
      images: [
        "/styles/bg/bg1.jpg",
        "/styles/bg/bg2.jpg",
        "/styles/bg/bg3.jpg",
      ],
    },
    {
      title: "MINIMALIST",
      images: [
        "/styles/min/m1.jpg",
        "/styles/min/m2.jpg",
        "/styles/min/m3.jpg",
      ],
    },
    {
      title: "CUSTOM",
      images: [
        "/styles/custom/c1.jpg",
        "/styles/custom/c2.jpg",
        "/styles/custom/c3.jpg",
      ],
    },
  ];

  return (
    <section className="relative z-20 -mt-40 px-6 py-24 overflow-hidden">

      {/* 🔥 BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* 🎨 TEXTURE */}
      <div className="absolute inset-0 bg-[url('/texture.jpg')] opacity-20" />

      {/* ✨ SUBTLE GLOW */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      {/* 🔝 TOP BLEND */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent z-10" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-semibold tracking-[0.25em] mb-16 text-white"
        >
          CHOOSE YOUR STYLE
        </motion.h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {styles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden border border-white/10 hover:-translate-y-2 hover:scale-[1.02] transition duration-300"
            >
              {/* IMAGE */}
              <img
                src={item.images[0]}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl md:text-2xl font-semibold tracking-wide mb-4 text-white">
                  {item.title}
                </h3>

                <Link
                  href={`/styles/${item.title
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                >
                  <span className="border border-white px-6 py-2 text-sm tracking-widest hover:bg-white hover:text-black transition inline-block">
                    VIEW WORKS
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}