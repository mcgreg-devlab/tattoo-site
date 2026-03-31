"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  name: string;
  style: string;
  image: string;
};

export default function ArtistCard({ name, style, image }: Props) {
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/artists/${slug}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative overflow-hidden group cursor-pointer"
      >
        <img
          src={image}
          className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-300">{style}</p>
        </div>
      </motion.div>
    </Link>
  );
}