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
        <div className="relative overflow-hidden">
          <img
            src={image}
            className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-110"
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