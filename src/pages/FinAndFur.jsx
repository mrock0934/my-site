// src/pages/FinAndFur.jsx
import { Link } from "react-router-dom";

export default function FinAndFur() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Top bar: back link + logo/title + LinkedIn */}
      <header className="border-b border-neutral-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link to="/" className="text-sm transition hover:text-neutral-500">
            ← Back
          </Link>
          <div className="flex items-center gap-2">
            <img src="/finfur-logo.png" alt="Fin and Fur" className="h-6 w-auto" />
            <span className="font-serif text-lg font-semibold">
              Fin &amp; Fur | The American Southwest
            </span>
          </div>
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

      {/* Hero title + subtitle */}
      <section className="mx-auto max-w-5xl px-5 pt-10 md:pt-14">
        <h1 className="font-serif text-3xl font-bold md:text-4xl flex items-center gap-3">
          <img 
            src="/finfur-logo.png" 
            alt="Fin & Fur logo" 
            className="h-10 w-auto"
          />
          Fin &amp; Fur Films | The American Southwest
        </h1>
        <p className="mt-3 text-lg text-neutral-700">
          Narrated by Quannah Chasinghorse, this film follows an adventurous journey 
          down the Colorado River, weaving together wildlife, cultural history, and 
          the uncertain future of the American Southwest.
        </p>
      </section>

      {/* Two-column: description + cover image */}
      <section className="mx-auto max-w-5xl px-5 py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_380px] md:items-start">
          {/* Text column */}
          <div className="text-[18px] leading-8 text-neutral-800">
            <p>
              I partnered with the Fin &amp; Fur team to design maps and spatial assets 
              that support narrative beats across the Colorado River basin. Work spanned 
              terrain analysis, base map styling, DEM rendering at scale, and building 
              Python workflows to streamline and scale production.
            </p>
            <p className="mt-6">
              Tools included QGIS and Python for data prep, custom tiles for cartographic 
              consistency, and lightweight web exports to preview sequences with the 
              editorial team. Emphasis was on clarity and elegance - maps that add context 
              without stealing the scene.
            </p>

            {/* Quick facts */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Meta label="Role" value="Cartography, Geospatial Development" />
              <Meta label="Focus" value="Rivers, Corridors, Terrain" />
              <Meta label="Stack" value="QGIS, Python, Protomaps" />
              <Meta label="Year" value="2025" />
            </div>
          </div>

          {/* Cover image */}
          <aside className="md:sticky md:top-24">
            <img
              src="/ASW.jpg"
              alt="Fin & Fur — American Southwest cover"
              className="w-full rounded-2xl border border-neutral-200 object-cover shadow-sm"
            />
          </aside>
        </div>
      </section>

      {/* Vimeo Preview */}
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://player.vimeo.com/video/1108591712?h=3bb3560174"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="THE AMERICAN SOUTHWEST GIS & Motion Graphics Package"
          />
        </div>
      </section>

    

      <footer className="border-t border-neutral-200/70 py-10 text-center text-sm text-neutral-600">
        <div className="mx-auto max-w-5xl px-5">
          © {new Date().getFullYear()} Max Rock
        </div>
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
