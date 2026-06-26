"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ServiceGalleryProps {
  images: string[];
  title: string;
  fit?: "cover" | "contain";
}

export default function ServiceGallery({ images, title, fit = "cover" }: ServiceGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setLightboxIndex((i) => (i !== null ? Math.min(i + 1, images.length - 1) : null));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setLightboxIndex((i) => (i !== null ? Math.max(i - 1, 0) : null));
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    },
    [lightboxIndex, images.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const next = () => setLightboxIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i));

  return (
    <>
      <style>{`
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0.93);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lightbox-img-wrap {
          max-width: 90vw;
          max-height: 88vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lightbox-img-wrap img {
          max-width: 90vw;
          max-height: 88vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 4px;
          display: block;
        }
        .lb-btn {
          background: rgba(255,255,255,0.1);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          color: rgba(255,255,255,0.75);
          transition: color 0.2s, background 0.2s;
        }
        .lb-btn:hover { color: #fff; background: rgba(255,255,255,0.2); }
      `}</style>

      <button
        className={`relative block w-full h-72 md:h-[28rem] rounded-sm overflow-hidden border border-gray-100 cursor-zoom-in p-0 ${fit === "contain" ? "bg-[#F8F7F4]" : ""}`}
        onClick={() => setLightboxIndex(0)}
        aria-label={`View ${title} project`}
      >
        <Image
          src={images[0]}
          alt={`${title} project`}
          fill
          className={`${fit === "contain" ? "object-contain" : "object-cover hover:scale-105 transition-transform duration-500"}`}
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
        />
      </button>

      {images.length > 1 && (
        <div className="flex gap-3 mt-3">
          {images.slice(1).map((img, idx) => {
            const i = idx + 1;
            return (
              <button
                key={img}
                className="relative flex-1 h-24 rounded-sm overflow-hidden cursor-zoom-in p-0 border-0"
                onClick={() => setLightboxIndex(i)}
                aria-label={`View ${title} project ${i + 1}`}
              >
                <Image src={img} alt={`${title} project ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="20vw" />
              </button>
            );
          })}
        </div>
      )}

      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button
            onClick={closeLightbox}
            className="lb-btn"
            aria-label="Close"
            style={{ position: "absolute", top: 16, right: 20, fontSize: "1.25rem" }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <p
            aria-live="polite"
            style={{
              position: "absolute",
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.8rem",
              letterSpacing: "0.18em",
              userSelect: "none",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {lightboxIndex + 1} / {images.length}
          </p>

          {lightboxIndex > 0 && (
            <button
              className="lb-btn"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images[lightboxIndex]} alt={`${title} project ${lightboxIndex + 1}`} loading="eager" />
          </div>

          {lightboxIndex < images.length - 1 && (
            <button
              className="lb-btn"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)" }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
