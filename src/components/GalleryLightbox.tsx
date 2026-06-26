"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function GalleryLightbox({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-sm cursor-pointer group"
            style={{ height: "208px" }}
            onClick={() => { setIndex(i); setOpen(true); }}
          >
            <Image
              src={img}
              alt="Greenworx landscaping project"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.6)' }}
          onClick={close}
        >
          {/* Modal panel */}
          <div
            className="relative overflow-hidden rounded-sm"
            style={{ width: '95vw', maxWidth: '1360px', height: '87vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt="Greenworx landscaping project"
              fill
              className="object-cover"
              priority
            />

            {/* Counter */}
            <p className="absolute text-white/70 text-xs bg-black/40 px-3 py-1 rounded-full" style={{ bottom: '12px', left: '50%', transform: 'translateX(-50%)' }}>
              {index + 1} / {images.length}
            </p>

            {/* Close — top right */}
            <button
              className="absolute w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1B4332] shadow hover:bg-[#7DC143] hover:text-white transition-colors"
              style={{ top: '12px', right: '12px' }}
              onClick={close}
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev — inside image, left side */}
            <button
              className="absolute w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1B4332] shadow-lg hover:bg-[#7DC143] hover:text-white transition-colors"
              style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next — inside image, right side */}
            <button
              className="absolute w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1B4332] shadow-lg hover:bg-[#7DC143] hover:text-white transition-colors"
              style={{ right: '16px', top: '50%', transform: 'translateY(-50%)' }}
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
