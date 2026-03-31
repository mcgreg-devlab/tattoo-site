"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  name: string;
  style: string;
  image: string;
  slug: string;
};

export default function ArtistCard({ name, style, image, slug }: Props) {
  return (
    <Link href={`/artists/${slug}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="group cursor-pointer transition"
      >
        <div className="relative overflow-hidden cursor-pointer group">
          <img
  src={image}
  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
/>

          {/* Overlay */}
          <div className="absolute inset-0 border border-transparent group-hover:border-[color:var(--gold)] transition duration-500" />
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">{style}</p>
        </div>
      </motion.div>
    </Link>
  );
}