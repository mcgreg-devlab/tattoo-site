"use client";

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
      <div className="relative overflow-hidden cursor-pointer group">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-300">{style}</p>
        </div>
      </div>
    </Link>
  );
}