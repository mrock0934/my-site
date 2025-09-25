// src/pages/Gallery.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const [dest, setDest] = useState([]);
  useEffect(() => {
    fetch("/gallery/index.json").then(r => r.json()).then(setDest).catch(() => setDest([]));
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <Link to="/" className="text-sm hover:text-neutral-300">← Back</Link>
          <h1 className="font-serif text-2xl font-semibold">Gallery</h1>
          <div className="w-10" />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dest.map(d => (
            <li key={d.slug}>
              <Link
                to={`/gallery/${d.slug}`}
                className="group block overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/10 hover:ring-white/20 transition"
                aria-label={d.name}
              >
                <div className="relative aspect-[4/3] w-full bg-black">
                  <img
                    src={d.cover}
                    alt={d.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                    <h2 className="text-lg font-semibold text-white drop-shadow">{d.name}</h2>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
