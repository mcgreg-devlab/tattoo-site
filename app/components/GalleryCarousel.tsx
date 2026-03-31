"use client";

import { useState } from "react";

export default function GalleryCarousel() {
  const images = [
    "/tattoo1.jpg",
    "/tattoo2.jpg",
    "/tattoo3.jpg",
    "/tattoo1.jpg",
    "/tattoo2.jpg",
    "/tattoo3.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="overflow-hidden py-10 carousel group">

      <div className="flex gap-6 animate-scroll scroll-track group-hover:[animation-play-state:paused]">
        {images.map((src, i) => (
          <div key={i} className="min-w-[300px]">
            <div className="relative overflow-hidden group">

              <img
                src={src}
                onClick={() => setSelectedImage(src)}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}