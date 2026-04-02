"use client";

import { motion } from "framer-motion";

export default function ArtistsSection() {
  return (
    <section className="relative py-32 px-6 text-white overflow-hidden">

      {/* TEXTURE BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/texture.jpg')",
          opacity: 0.5,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* 🔥 TITLE WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-20"
        >
          <div className="h-px w-16 bg-white/20" />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.3em]">
            MEET THE ARTISTS
          </h2>
          <div className="h-px w-16 bg-white/20" />
        </motion.div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              name: "JAY",
              role: "BLACK & GREY",
              img: "/artist1.jpg",
            },
            {
              name: "KAREN",
              role: "FINE LINE & MINIMALIST",
              img: "/artist2.jpg",
            },
            {
              name: "MIKE",
              role: "REALISM | COVER-UPS",
              img: "/artist3.jpg",
            },
          ].map((artist, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden border border-white/10"
            >
              {/* IMAGE */}
              <img
                src={artist.img}
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                
                <h3 className="text-2xl md:text-3xl font-semibold tracking-widest mb-2">
                  {artist.name}
                </h3>

                <p className="text-sm tracking-[0.3em] text-white/70 mb-6">
                  {artist.role}
                </p>

                {/* BUTTON */}
                <a
                  href="/contact"
                  className="bg-red-700 hover:bg-red-600 px-6 py-3 text-sm tracking-widest transition"
                >
                  BOOK THIS ARTIST
                </a>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}