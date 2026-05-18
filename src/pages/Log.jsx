import { useState } from "react";
import { Link } from "react-router-dom";
import posts from "../posts/index.js";

const CATEGORIES = ["All", "Trips", "Field Notes", "Projects", "Reflections", "Photography"];

export default function Log() {
  const [active, setActive] = useState("All");

  const sorted = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((p) => active === "All" || p.category === active);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="fixed inset-x-0 top-0 z-50 bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="text-sm text-white transition hover:text-neutral-200">
            ← Max Rock
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pt-32 pb-24">
        <h1 className="font-serif text-3xl font-bold md:text-4xl">My Log</h1>
        <p className="mt-3 text-neutral-500 text-[17px]">
          Field notes, project updates, and reflections.
        </p>

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                active === cat
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts list */}
        <ul className="mt-12 space-y-10">
          {sorted.length === 0 ? (
            <p className="text-neutral-400">Nothing here yet.</p>
          ) : (
            sorted.map((post) => (
              <li key={post.slug}>
                <Link to={`/log/${post.slug}`} className="group block">
                  <div className="flex items-center gap-3">
                    <time className="text-xs uppercase tracking-widest text-neutral-400">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric", month: "long", day: "numeric",
                      })}
                    </time>
                    {post.category && (
                      <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500">
                        {post.category}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-1 font-serif text-xl font-semibold group-hover:underline">
                    {post.title}
                  </h2>
                  {post.summary && (
                    <p className="mt-1 text-neutral-600 text-[16px]">{post.summary}</p>
                  )}
                </Link>
              </li>
            ))
          )}
        </ul>
      </main>

      <footer className="border-t border-neutral-200/70 py-10 text-center text-sm text-neutral-600">
        <div className="mx-auto max-w-3xl px-5">© {new Date().getFullYear()} Max Rock</div>
      </footer>
    </div>
  );
}