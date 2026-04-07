"use client";

import { useState, use } from "react";

export default function StylePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params); // ✅ correct for Next 16

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleries: Record<string, string[]> = {
    "black-grey": [
      "/styles/bg/bg1.jpg",
      "/styles/bg/bg2.jpg",
      "/styles/bg/bg3.jpg",
      "/styles/bg/bg4.jpg",
      "/styles/bg/bg5.jpg",
      "/styles/bg/bg6.jpg",
      "/styles/bg/bg7.jpg",
      "/styles/bg/bg8.jpg",
      "/styles/bg/bg9.jpg",
      "/styles/bg/bg10.jpg",
    ],
    minimalist: [
      "/styles/min/m1.jpg",
      "/styles/min/m2.jpg",
      "/styles/min/m3.jpg",
      "/styles/min/m4.jpg",
      "/styles/min/m5.jpg",
      "/styles/min/m6.jpg",
      "/styles/min/m7.jpg",
      "/styles/min/m8.jpg",
      "/styles/min/m9.jpg",
      "/styles/min/m10.jpg",
      "/styles/min/m11.jpg",
    ],
    custom: [
      "/styles/custom/c1.jpg",
      "/styles/custom/c2.jpg",
      "/styles/custom/c3.jpg",
      "/styles/custom/c4.jpg",
      "/styles/custom/c5.jpg",
      "/styles/custom/c6.jpg",
      "/styles/custom/c7.jpg",
      "/styles/custom/c8.jpg",
      "/styles/custom/c9.jpg",
      "/styles/custom/c10.jpg",
    ],
  };

  const images = galleries[slug] || [];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        {slug.replace("-", " ").toUpperCase()}
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setSelectedImage(img)}
            className="w-full h-80 object-cover cursor-pointer hover:scale-105 transition"
          />
        ))}
      </div>

      {/* ✅ MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      {images.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No images found for this style.
        </p>
      )}
    </main>
  );
}