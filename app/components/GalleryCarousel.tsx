"use client";

import { useState } from "react";

export default function GalleryCarousel() {
  const images = [
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery6.jpg",
    "/gallery/gallery7.jpg",
  ];

  const loopImages = [...images, ...images];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ✅ ADD THIS (fix for swipe interaction)
  const [isInteracting, setIsInteracting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="py-10">

      {/* 🔥 SCROLL CONTAINER */}
      <div className="overflow-hidden">

        {/* ✅ ADD scrollable wrapper (for swipe) */}
        <div className="overflow-x-auto no-scrollbar scroll-smooth">

          <div
            onMouseDown={() => {
  setIsInteracting(true);
  setIsDragging(false);
}}
onMouseMove={() => setIsDragging(true)}
onMouseUp={() => setIsInteracting(false)}
onMouseLeave={() => setIsInteracting(false)}

onTouchStart={() => {
  setIsInteracting(true);
  setIsDragging(false);
}}
onTouchMove={() => setIsDragging(true)}
onTouchEnd={() => setIsInteracting(false)}
            className={`
              flex gap-6 w-max px-4
              cursor-grab active:cursor-grabbing
              ${!isInteracting ? "animate-[scroll_60s_linear_infinite]" : ""}
            `}
          >
            {loopImages.map((src, i) => (
              <div key={i} className="min-w-[300px] flex-shrink-0">
                
                <div className="relative overflow-hidden group cursor-pointer">

                  <img
                    src={src}
                    onClick={() => {
  if (!isDragging) {
    setSelectedImage(src);
  }
}}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable={false}
                  />

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 🔥 MODAL */}
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