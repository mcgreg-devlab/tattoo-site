"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  PenTool,
  Users,
  MapPin,
  Star,
} from "lucide-react";

export default function WhySection() {
  return (
    <section className="relative py-32 px-6 text-white overflow-hidden">

      {/* 🔥 BASE GRADIENT */}
<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

{/* 🎨 TEXTURE (VISIBLE + BLENDED) */}
<div className="absolute inset-0 bg-[url('/texture.jpg')] opacity-20" />

{/* ✨ SUBTLE GLOW */}
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* 🔥 ANIMATED TITLE + LINES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8 }}
            className="h-px bg-white/20"
          />

          <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.3em]">
            WHY CHOOSE NORTHINK CDO?
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8 }}
            className="h-px bg-white/20"
          />
        </motion.div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-5 divide-x divide-white/10">

          {[
            {
              icon: <ShieldCheck size={44} strokeWidth={1} />,
              title: "STERILE EQUIPMENT",
              desc: "Top-grade sterilization ensuring safety and hygiene.",
            },
            {
              icon: <PenTool size={44} strokeWidth={1} />,
              title: "CUSTOM DESIGNS",
              desc: "Every tattoo is uniquely crafted to your vision.",
            },
            {
              icon: <Users size={44} strokeWidth={1} />,
              title: "EXPERIENCED ARTIST",
              desc: "Skilled professionals with years of expertise.",
            },
            {
              icon: <MapPin size={44} strokeWidth={1} />,
              title: "CENTRAL CDO LOCATION",
              desc: "Conveniently located in the heart of the city.",
            },
            {
              icon: <Star size={44} strokeWidth={1} />,
              title: "5-STAR REVIEWS",
              desc: "Trusted by hundreds of satisfied clients.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="px-6 py-6 flex flex-col items-center text-center space-y-4 group hover:-translate-y-2 hover:scale-[1.02] transition duration-300"
            >
              {/* ICON */}
              <div className="opacity-70 group-hover:opacity-100 transition duration-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xs tracking-[0.25em] font-semibold">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-[180px]">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <a
            href="/artists"
            className="inline-block border border-white/30 px-10 py-4 tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            VIEW FULL PORTFOLIO →
          </a>
        </motion.div>

      </div>
    </section>
  );
}