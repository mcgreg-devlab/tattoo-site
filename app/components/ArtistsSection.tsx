"use client";

import { motion } from "framer-motion";
import { Camera, Heart, X } from "lucide-react";
import { useState } from "react";

export default function ArtistsSection() {
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

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

        {/* TITLE */}
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

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {[
            { name: "JAY", role: "BLACK & GREY", img: "/artist1.jpg" },
            { name: "KAREN", role: "FINE LINE & MINIMALIST", img: "/artist2.jpg" },
            { name: "MIKE", role: "REALISM | COVER-UPS", img: "/artist3.jpg" },
          ].map((artist, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden border border-white/10 hover:border-white/30 transition duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            >
              {/* IMAGE */}
              <img
                src={artist.img}
                alt={artist.name}
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-500" />

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                <h3 className="text-2xl md:text-3xl font-semibold tracking-widest mb-2">
                  {artist.name}
                </h3>

                <p className="text-sm tracking-[0.3em] text-white/70 mb-6">
                  {artist.role}
                </p>

                <div className="flex gap-4 mb-6 opacity-70 group-hover:opacity-100 transition duration-300">
                  <Camera size={18} />
                  <Heart size={18} />
                </div>

                {/* ✅ BUTTON NOW OPENS MODAL */}
                <button
                  onClick={() => setSelectedArtist(artist.name)}
                  className="border border-red-600 text-red-500 px-6 py-3 text-sm tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  BOOK THIS ARTIST
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* 🔥 BOOKING MODAL */}
      {selectedArtist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          
          <div className="bg-black border border-white/20 p-8 max-w-md w-full relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedArtist(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-4 tracking-widest">
              Book {selectedArtist}
            </h3>

            {/* SIMPLE FORM */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent border border-white/20 p-3 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-white/20 p-3 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-transparent border border-white/20 p-3 outline-none"
              />
              <textarea
                placeholder="Tattoo Idea"
                className="bg-transparent border border-white/20 p-3 outline-none"
              />

              <button className="bg-red-600 py-3 mt-2 hover:bg-red-700 transition">
                Submit Request
              </button>
            </form>

          </div>
        </div>
      )}

    </section>
  );
}