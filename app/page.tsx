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

      {/* About Section */}
<section className="relative py-32 px-6 text-center text-white overflow-hidden min-h-[400px]">

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

</section>

     {/* Gallery Section */}
<section className="py-32 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl font-semibold text-center mb-16">
    Ink Gallery
  </h2>

  <GalleryCarousel />
</section>

<div className="h-32 bg-gradient-to-b from-black to-gray-950" />

      {/* Services Section */}
<section className="py-24 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-semibold text-center mb-16">
    Our Expertise
  </h2>

  <div className="grid md:grid-cols-3 gap-10 text-center">
    
    <div>
      <h3 className="text-xl font-bold mb-3">Custom Tattoos</h3>
      <p className="text-gray-400">
        Fully personalized designs crafted to match your vision.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-3">Black & Grey</h3>
      <p className="text-gray-400">
        Timeless shading and realism with deep contrast.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-3">Fine Line</h3>
      <p className="text-gray-400">
        Clean, minimal, and precise modern tattoo styles.
      </p>
    </div>

  </div>
</section>

      <ParallaxSection />
      {/* CTA Section */}
<section className="py-32 text-center">
  <h2 className="text-4xl font-bold mb-6">
    Book Your Session
  </h2>

  <p className="text-gray-400 mb-8">
    Work with elite artists and bring your vision to life.
  </p>

  <a
    href="/contact"
    className="inline-block border border-white px-10 py-4 tracking-wide hover:bg-white hover:text-black transition-all duration-300"
  >
    Start Your Journey
  </a>
</section>

      <footer className="pt-10 pb-10 text-center text-gray-500 text-sm border-t border-gray-800">
  © 2026 Northink CDO | Powered By: mgseosolution.com 
</footer>
      
    </main>
  );
}