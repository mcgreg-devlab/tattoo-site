"use client";

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
      <div className="cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover"
        />

        <div className="mt-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-400">{style}</p>
        </div>
      </div>
    </Link>
  );
}