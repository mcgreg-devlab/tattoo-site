"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -120]);

  const [openModal, setOpenModal] = useState(false);
  const [success, setSuccess] = useState(false);

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
      </div>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* 🔥 CONTENT */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 leading-tight">
          AN ARTIST <br />
          FOR EVERY STYLE & VISION <br />
          INK YOUR STORY
        </h1>

        <p className="mt-6 text-white/70 text-sm md:text-base tracking-wide">
          Trusted • Reliable • Professional Tattoo Artists in Cagayan de Oro City
        </p>

        <div className="mt-10 md:mt-12">
          <button
            onClick={() => setOpenModal(true)}
            className="relative inline-block px-12 py-5 border border-yellow-500 text-white tracking-[0.25em] overflow-hidden group transition"
          >
            <span className="relative z-10">BOOK YOUR SESSION →</span>

            <span className="absolute inset-0 bg-yellow-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>

            <span className="absolute inset-0 flex items-center justify-center text-black font-semibold opacity-0 group-hover:opacity-100 transition">
              BOOK YOUR SESSION →
            </span>
          </button>
        </div>
      </motion.div>

      {/* MODAL */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-black border border-white/20 p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 tracking-wide">
              Book Your Session
            </h2>

            {/* ✅ FORMSpree FORM */}
            <form
              action="https://formspree.io/f/xojpbyeq"
              method="POST"
              onSubmit={() => {
  setTimeout(() => {
    setOpenModal(false);
    setSuccess(true);
  }, 300);
}}
              className="space-y-4"
            >
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-transparent border border-white/30 focus:outline-none"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-transparent border border-white/30 focus:outline-none"
                required
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 bg-transparent border border-white/30 focus:outline-none"
                required
              />

              <input
                name="date"
                type="date"
                className="w-full p-3 bg-transparent border border-white/30 focus:outline-none"
                required
              />

              <textarea
                name="idea"
                placeholder="Describe your tattoo idea..."
                className="w-full p-3 bg-transparent border border-white/30 focus:outline-none h-28"
                required
              />

              <button
                type="submit"
                className="w-full border border-yellow-500 text-yellow-400 py-3 tracking-widest hover:bg-yellow-500 hover:text-black transition"
              >
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ✅ SUCCESS MESSAGE (NEW — SAFE ADD) */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="bg-black border border-white/20 p-8 text-center max-w-md">
            <h2 className="text-2xl text-yellow-500 mb-4">
              Request Sent ✅
            </h2>
            <p className="text-white/70">
              Thank you! We’ll get back to you shortly.
            </p>
          </div>
        </div>
      )}

    </section>
  );
}