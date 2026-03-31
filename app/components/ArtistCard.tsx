"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.03 }}
  className="group cursor-pointer"
>
        <div className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-2xl font-semibold tracking-wide">
            {name}
          </h3>
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            {style}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}