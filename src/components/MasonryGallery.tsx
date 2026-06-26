"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

export interface GalleryItem {
  src: string;        // thumbnail WebP path
  full: string;       // full-size WebP path
  width: number;      // thumbnail width (px) — for CLS prevention
  height: number;     // thumbnail height (px) — for CLS prevention
  blurDataURL: string;
  alt: string;
}

interface MasonryGalleryProps {
  items: GalleryItem[];
  initialCount?: number;
  batchSize?: number;
}

export default function MasonryGallery({
  items,
  initialCount = 16,
  batchSize = 16,
}: MasonryGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // Track which full-size images have been pre-fetched
  const prefetchedRef = useRef(new Set<number>());

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  // ── Keyboard nav ───────────────────────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setLightboxIndex((i) => (i !== null ? Math.min(i + 1, items.length - 1) : null));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setLightboxIndex((i) => (i !== null ? Math.max(i - 1, 0) : null));
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    },
    [lightboxIndex, items.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // ── Scroll lock ────────────────────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  // ── Prefetch adjacent full-size images ─────────────────────────────────────
  useEffect(() => {
    if (lightboxIndex === null) return;
    const toFetch = [lightboxIndex - 1, lightboxIndex, lightboxIndex + 1].filter(
      (i) => i >= 0 && i < items.length && !prefetchedRef.current.has(i)
    );
    toFetch.forEach((i) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.as = "image";
      link.href = items[i].full;
      document.head.appendChild(link);
      prefetchedRef.current.add(i);
    });
  }, [lightboxIndex, items]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const next = () =>
    setLightboxIndex((i) => (i !== null && i < items.length - 1 ? i + 1 : i));

  return (
    <>
      <style>{`
        .masonry-grid {
          column-gap: 12px;
          column-count: 4;
        }
        @media (max-width: 1024px) { .masonry-grid { column-count: 2; } }
        @media (max-width: 640px)  { .masonry-grid { column-count: 1; } }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 12px;
          border-radius: 6px;
          overflow: hidden;
          cursor: zoom-in;
          display: block;
          position: relative;
          background: #d4dbd5;
          width: 100%;
          border: none;
          padding: 0;
        }
        /* Aspect-ratio box to reserve space before image loads (CLS prevention) */
        .masonry-item .img-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .masonry-item .img-wrapper img {
          display: block;
          width: 100%;
          height: auto;
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .masonry-item:hover .img-wrapper img {
          transform: scale(1.045);
        }
        .masonry-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(27, 67, 50, 0);
          transition: background 0.3s ease;
          border-radius: 6px;
          pointer-events: none;
        }
        .masonry-item:hover::after {
          background: rgba(27, 67, 50, 0.1);
        }

        /* Lightbox */
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

      {/* ── Masonry grid ─────────────────────────────────────────────────── */}
      <div className="masonry-grid">
        {visibleItems.map((item, i) => {
          // Compute padding-top % to reserve space = (height/width)*100
          const paddingTop = `${((item.height / item.width) * 100).toFixed(4)}%`;
          // First viewport batch eager-loaded, rest lazy
          const isEager = i < 8;

          return (
            <button
              key={item.src}
              className="masonry-item"
              onClick={() => openLightbox(i)}
              aria-label={`View ${item.alt} ${i + 1}`}
            >
              <div className="img-wrapper" style={{ paddingTop }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading={isEager ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL={item.blurDataURL}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Load more ────────────────────────────────────────────────────── */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((c) => Math.min(c + batchSize, items.length))}
            className="inline-flex items-center gap-2 border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white font-semibold px-10 py-4 rounded-sm transition-all duration-300 tracking-wide text-sm uppercase"
          >
            Load More Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox} role="dialog" aria-modal="true">
          {/* Close */}
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

          {/* Counter */}
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
            {lightboxIndex + 1} / {items.length}
          </p>

          {/* Prev */}
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

          {/* Full-size image — loaded only when lightbox is open */}
          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            {/* Use plain <img> for the lightbox — it's already an optimised WebP from Sharp,
                and we want it to load at its natural size without Next.js re-processing */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={items[lightboxIndex].full}
              alt={items[lightboxIndex].alt}
              loading="eager"
            />
          </div>

          {/* Next */}
          {lightboxIndex < items.length - 1 && (
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
