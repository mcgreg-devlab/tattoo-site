"use client";

import { motion } from "framer-motion";
import ArtistCard from "./ArtistCard";

export default function ArtistsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        OUR ARTISTS
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        <ArtistCard
          name="Artist One"
          style="Realism"
          image="/artist1.jpg"
          slug="artist-one"
        />
        <ArtistCard
          name="Artist Two"
          style="Blackwork"
          image="/artist2.jpg"
          slug="artist-two"
        />
        <ArtistCard
          name="Artist Three"
          style="Minimalist"
          image="/artist3.jpg"
          slug="artist-three"
        />
      </div>
    </motion.section>
  );
}