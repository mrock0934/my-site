// src/pages/GalleryDestination.jsx
// (keep your existing logic; just swap classes)
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function GalleryDestination() {
  const { slug } = useParams();
  const [files, setFiles] = useState([]);
  const [visible, setVisible] = useState(48);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch(`/gallery/${slug}/manifest.json`).then(r => r.json()).then(setFiles).catch(() => setFiles([]));
    setVisible(48);
    setActiveIndex(null);
  }, [slug]);

  const shown = useMemo(() => files.slice(0, visible), [files, visible]);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <Link to="/gallery" className="text-sm hover:text-neutral-300">← Gallery</Link>
          <h1 className="font-serif text-2xl font-semibold">{slug}</h1>
          <div className="text-sm text-neutral-400">{files.length} photos</div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-3 sm:px-5 py-6">
        <div className="grid gap-2 sm:gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {shown.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setActiveIndex(i)}
              className="overflow-hidden rounded-xl bg-black ring-1 ring-white/5 focus:outline-none focus:ring-2 focus:ring-white/30"
              title="Open"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover transition will-change-transform hover:brightness-110"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>

        {visible < files.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisible(v => v + 48)}
              className="rounded-full border border-white/10 px-4 py-2 text-sm hover:border-white/30"
            >
              Load more
            </button>
          </div>
        )}
      </section>

      {activeIndex !== null && (
        <Lightbox
          items={files}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onIndexChange={setActiveIndex}
        />
      )}
    </main>
  );
}

// keep your existing Lightbox logic; just tweak visuals:
function Lightbox({ items, index, onClose, onIndexChange }) {
  const src = items[index];

  // ESC / ← →
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange(Math.min(items.length - 1, index + 1));
      if (e.key === "ArrowLeft")  onIndexChange(Math.max(0, index - 1));
    };
    const prevOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, items.length, onClose, onIndexChange]);

  // simple swipe
  useEffect(() => {
    let startX = 0;
    const start = (e) => { startX = e.touches?.[0]?.clientX ?? 0; };
    const end   = (e) => {
      const dx = (e.changedTouches?.[0]?.clientX ?? 0) - startX;
      if (dx > 60)  onIndexChange(Math.max(0, index - 1));
      if (dx < -60) onIndexChange(Math.min(items.length - 1, index + 1));
    };
    window.addEventListener("touchstart", start);
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("touchstart", start);
      window.removeEventListener("touchend", end);
    };
  }, [index, items.length, onIndexChange]);

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop (click to close) */}
      <button
        type="button"
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close backdrop"
      />

      {/* Image layer */}
      <figure className="absolute inset-0 z-[110] m-0 flex items-center justify-center p-4 sm:p-8">
        <img
          src={src}
          alt=""
          className="h-auto max-h-[85vh] w-auto max-w-[92vw] select-none rounded-xl shadow-2xl ring-1 ring-white/10"
        />
      </figure>

      {/* Controls (always above image) */}
      <button
        type="button"
        className="absolute right-4 top-4 z-[120] rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        onClick={onClose}
        aria-label="Close"
      >✕</button>

      <button
        type="button"
        className="absolute left-2 top-1/2 z-[120] -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
        onClick={() => onIndexChange(Math.max(0, index - 1))}
        aria-label="Previous"
      >‹</button>

      <button
        type="button"
        className="absolute right-2 top-1/2 z-[120] -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
        onClick={() => onIndexChange(Math.min(items.length - 1, index + 1))}
        aria-label="Next"
      >›</button>
    </div>
  );
}

