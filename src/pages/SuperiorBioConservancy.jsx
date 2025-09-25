// src/pages/SuperiorBioConservancy.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SuperiorBioConservancy() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setLightboxOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Top bar */}
      <header className="border-b border-neutral-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link to="/" className="text-sm transition hover:text-neutral-500">
            ← Back
          </Link>
          <span className="font-serif text-lg font-semibold">Superior Bio Conservancy</span>
          <a
            href="https://www.linkedin.com/in/max-rock-2554b8153"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-neutral-500"
            aria-label="Max Rock on LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-.9 1.7-2.1 3.7-2.1 3.9 0 4.6 2.6 4.6 6v9.5h-4v-8.4c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24h-4V8.5z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pt-10 md:pt-14">
        <h1 className="font-serif text-3xl font-bold md:text-4xl flex items-center gap-3">
          <img 
            src="/sbc_logo.png" 
            alt="Superior Bio Conservancy logo" 
            className="h-10 w-auto"
          />
          Superior Bio Conservancy
        </h1>
      </section>

      {/* Intro + Static Map */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_520px] md:items-start">
          <div className="text-[18px] leading-8 text-neutral-800">
            <p className="mt-6">
              As a founding member of the Board of Directors, I help shape conservation strategy
              across the Laurentian Forest Province and Lake Superior watershed. Our mission is to
              restore ecological integrity through beaver habitat, carbon storage research, and
              community engagement.
            </p>

            <p className="mt-6">
              At Superior Bio-Conservancy (SBC), I guide projects that integrate geospatial science and conservation practice - 
              from beaver restoration modeling in the Milwaukee River Watershed to a Carbon Storage
              Index for recovery zones across the Laurentian Forest Province.
            </p>

            <p className="mt-6">
              The work blends cartography, remote sensing, and storytelling - building maps and tools
              that support decision makers, researchers, and the broader public. We bring together
              terrain analysis, hyperspectral data, and ecological models to quantify benefits and
              inspire conservation.
            </p>

            {/* Quick facts */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Meta label="Role" value="Founding Board Member" />
              <Meta label="Focus" value="Conservation, Carbon, Watersheds" />
              <Meta label="Stack" value="QGIS, Python, Remote Sensing" />
              <Meta label="Years Active" value="2018–Present" />
            </div>
          </div>

          {/* RIGHT: static map with lightbox */}
          <aside className="md:sticky md:top-24">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="block w-full cursor-zoom-in"
              aria-label="Open map full size"
            >
              <img
                src="/sbc_full.jpg"
                alt="Superior Bio Conservancy Map"
                className="w-full rounded-2xl border border-neutral-200 object-contain shadow-lg"
              />
            </button>
            <p className="mt-2 text-sm text-neutral-500 text-center">Click to view full size</p>
          </aside>
        </div>
      </section>

      {/* lightbox overlay */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="absolute inset-0 mx-auto max-w-[95vw] p-4">
            <img
              src="/sbc_full.jpg"
              alt="Superior Bio Conservancy Map Full Size"
              className="mx-auto max-h-[92vh] w-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-6 top-6 rounded-full bg-white/90 px-3 py-1 text-sm shadow hover:bg-white"
            >
              Close (Esc)
            </button>
          </div>
        </div>
      )}

      {/* Embedded Septima maps */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-serif text-2xl font-bold mb-4">Beaver Population Map</h2>
        <div className="relative w-full h-[600px] overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://septima.dk/superior-web/"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
            title="Superior Web Map"
          />
        </div>
        <p className="mt-4 text-[16px] leading-7 text-neutral-700">
          This interactive map highlights the Superior Bio Conservancy’s geographic focus, showing 
          recovery zones, watersheds, and priority areas across the Laurentian Forest Province. 
          It provides stakeholders with a spatial overview of where restoration efforts and 
          carbon storage projects are most impactful.
        </p>
        <p className="mt-2 text-sm text-neutral-500 text-center">
          Map work by Kurt Menke, <a href="https://septima.dk" target="_blank" rel="noreferrer" className="underline">Septima Consulting</a>
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-serif text-2xl font-bold mb-4">Connectivity Map</h2>
        <div className="relative w-full h-[600px] overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://septima.dk/superior-web/connectivity.html"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
            title="Connectivity Map"
          />
        </div>
        <p className="mt-4 text-[16px] leading-7 text-neutral-700">
          The connectivity map visualizes ecological corridors and linkages that connect habitats 
          across the region. It underscores the importance of landscape-scale conservation, 
          illustrating how beaver restoration can enhance biodiversity and watershed resilience.
        </p>
        <p className="mt-2 text-sm text-neutral-500 text-center">
          Map work by Kurt Menke, <a href="https://septima.dk" target="_blank" rel="noreferrer" className="underline">Septima Consulting</a>
        </p>
      </section>

      {/* Vimeo Preview */}
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://player.vimeo.com/video/418475470"
            className="absolute top-0 left-0 h-full w-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Superior Bio Conservancy — Video Preview"
          />
        </div>
      </section>

      <footer className="border-t border-neutral-200/70 py-10 text-center text-sm text-neutral-600">
        <div className="mx-auto max-w-5xl px-5">© {new Date().getFullYear()} Max Rock</div>
      </footer>
    </main>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <div className="text-[12px] uppercase tracking-[0.14em] text-neutral-500">{label}</div>
      <div>{value}</div>
    </div>
  );
}
