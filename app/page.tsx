"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StyleSection from "./components/StyleSection";
import WhySection from "./components/WhySection";
import ArtistsSection from "./components/ArtistsSection";
import { ParallaxSection } from "./components/ParallaxSection";
import GalleryCarousel from "./components/GalleryCarousel";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <StyleSection />
      <WhySection />
      <ArtistsSection /> 


      {/* Services Section */}
<section className="relative py-32 px-6 overflow-hidden">

  {/* 🔥 BACKGROUND GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

  {/* 🎨 TEXTURE OVERLAY */}
  <div className="absolute inset-0 bg-[url('/texture.jpg')] opacity-20" />

  {/* ✨ SUBTLE GLOW */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto">

    {/* 🔥 TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4">
        Our Expertise
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto">
        Precision. Creativity. Mastery. Explore the styles we specialize in.
      </p>
    </motion.div>

    {/* 🔥 CARDS */}
    <div className="grid md:grid-cols-3 gap-10">

      {[
        {
          title: "Custom Tattoos",
          desc: "Fully personalized designs crafted to match your vision.",
        },
        {
          title: "Black & Grey",
          desc: "Timeless shading and realism with deep contrast.",
        },
        {
          title: "Fine Line",
          desc: "Clean, minimal, and precise modern tattoo styles.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="group relative p-8 border border-white/10 hover:border-white/30 transition duration-500 rounded-2xl backdrop-blur-sm bg-white/5 hover:bg-white/10"
        >

          {/* ✨ HOVER GLOW */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] rounded-2xl" />

          <h3 className="text-xl font-semibold mb-4 tracking-wide">
            {item.title}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {item.desc}
          </p>

        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* Gallery Section */}
<section className="relative py-32 px-6 overflow-hidden">

  {/* 🔥 GRADIENT BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

  {/* ✨ CENTER GLOW */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

  {/* 🎨 TEXTURE OVERLAY */}
  <div className="absolute inset-0 bg-[url('/texture.jpg')] opacity-20" />

  {/* ✅ CONTENT WRAPPER */}
  <div className="relative z-10 max-w-7xl mx-auto">

    {/* TITLE */}
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-wide">
      Ink Gallery
    </h2>

    {/* GALLERY */}
    <GalleryCarousel />

  </div>

</section>

{/* About Section */}
<section className="relative py-32 px-6 text-center text-white overflow-hidden min-h-[400px]">

{/* 🔥 TOP BLEND (from Gallery) */}
<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-10" />

  {/* 🌆 CDO BACKGROUND */}
  <div className="absolute inset-0">
    <motion.img
  src="/cdo-bg.jpg"
  alt="Cagayan de Oro City"
  className="w-full h-full object-cover scale-110 opacity-30"
  initial={{ scale: 1.1 }}
  animate={{ scale: 1.15 }}
  transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
/>
  </div>

  {/* 🌑 DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/30" />

  {/* 🎨 TEXTURE OVERLAY */}
  <div className="absolute inset-0 bg-[url('/texture.jpg')] opacity-20" />

  {/* ✅ CONTENT (FIXED) */}
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative z-10 max-w-5xl mx-auto"
>

    <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
      Crafting Timeless Ink in Cagayan de Oro
    </h2>

    <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
      Proudly based in Cagayan de Oro City, our studio brings together skilled tattoo artists passionate about creating meaningful and lasting body art. Every design is crafted with precision — inspired by your story and made to stand out.
    </p>

  </motion.div>

  {/* 🔥 BOTTOM BLEND */}
<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10" />

</section>



      <ParallaxSection />
<section className="relative py-32 px-6 text-center overflow-hidden">

  {/* 🔥 BASE GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

  {/* 🎨 TEXTURE (same as other sections) */}
  <div className="absolute inset-0 bg-[url('/texture.jpg')] opacity-20" />

  {/* ✨ SUBTLE GLOW */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

  {/* 🔥 TOP BLEND (from parallax) */}
  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-3xl mx-auto">

    {/* 🔥 ANIMATED TITLE */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold tracking-wide mb-6"
    >
      BOOK YOUR SESSION
    </motion.h2>

    {/* 🔥 ANIMATED TEXT */}
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-gray-400 mb-10 text-lg leading-relaxed"
    >
      Turn your idea into a masterpiece with our world-class tattoo artists.
    </motion.p>

    {/* 🔥 ANIMATED BUTTON */}
    <motion.a
      href="/contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="inline-block border border-white px-10 py-4 tracking-widest text-sm hover:bg-white hover:text-black transition duration-300"
    >
      START YOUR JOURNEY →
    </motion.a>

  </div>
</section>

      <footer className="pt-10 pb-10 text-center text-gray-500 text-sm border-t border-gray-800">
  © 2026 Northink CDO | Powered By: mgseosolution.com 
</footer>
      
    </main>
  );
}