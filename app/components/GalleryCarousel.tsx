"use client";

import { useState } from "react";

export default function GalleryCarousel() {
  const images = [
    "/tattoo1.jpg",
    "/tattoo2.jpg",
    "/tattoo3.jpg",
    "/tattoo4.jpg",
    "/tattoo5.jpg",
    "/tattoo6.jpg",
    "/tattoo7.jpg",
    "/tattoo8.jpg",
  ];

  const loopImages = [...images, ...images];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-10">

      {/* 🔥 SCROLL CONTAINER */}
      <div className="overflow-hidden">

        <div
          className="
            group
            flex gap-6
            animate-scroll
            hover:[animation-play-state:paused]
            active:[animation-play-state:paused]
            overflow-x-auto
            scroll-smooth
            no-scrollbar
            touch-pan-x
            px-4
            cursor-grab active:cursor-grabbing
          "
        >
          {loopImages.map((src, i) => (
            <div key={i} className="min-w-[300px] flex-shrink-0">
              
              <div className="relative overflow-hidden group cursor-pointer">

                {/* IMAGE */}
                <img
                  src={src}
                  onClick={() => setSelectedImage(src)}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 🔥 FULLSCREEN MODAL */}
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