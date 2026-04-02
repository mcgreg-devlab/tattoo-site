"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Heart } from "lucide-react";

type Props = {
  name: string;
  style: string;
  image: string;
  slug: string;
};

export default function ArtistCard({ name, style, image, slug }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden border border-white/10 hover:border-white/30 transition duration-500"
    >
      {/* IMAGE */}
      <img
        src={image}
        className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-500" />

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

        {/* NAME */}
        <h3 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] mb-2">
          {name}
        </h3>

        {/* STYLE */}
        <p className="text-xs tracking-[0.3em] text-white/70 mb-6">
          {style}
        </p>

        {/* ICONS */}
        <div className="flex gap-4 mb-6 opacity-80 group-hover:opacity-100 transition">
          <Instagram size={18} />
          <Heart size={18} />
        </div>

        {/* BUTTON */}
        <Link href={`/artists/${slug}`}>
          <span className="border border-red-500 bg-red-600/80 px-6 py-2 text-sm tracking-widest hover:bg-red-600 transition">
            BOOK THIS ARTIST
          </span>
        </Link>
      </div>
    </motion.div>
  );
}