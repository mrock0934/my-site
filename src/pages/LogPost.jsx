import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "../posts/index.js";

const modules = import.meta.glob("../posts/*.md", { as: "raw", eager: true });

export default function LogPost() {
  const { slug } = useParams();
  const meta = posts.find((p) => p.slug === slug);

  if (!meta) return <Navigate to="/log" replace />;

  const raw = modules[`../posts/${slug}.md`];
  const body = raw?.replace(/^---[\s\S]*?---\n/, "") ?? "";

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="fixed inset-x-0 top-0 z-50 bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/log" className="text-sm text-white transition hover:text-neutral-200">
            ← My Log
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-5 pt-32 pb-24">
        <time className="text-xs uppercase tracking-widest text-neutral-400">
          {new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric", month: "long", day: "numeric",
          })}
        </time>
        <h1 className="mt-2 font-serif text-3xl font-bold md:text-4xl">{meta.title}</h1>

        <article className="mt-10 prose prose-neutral max-w-none text-[18px] leading-8">
          <ReactMarkdown>{body}</ReactMarkdown>
        </article>
      </main>

      <footer className="border-t border-neutral-200/70 py-10 text-center text-sm text-neutral-600">
        <div className="mx-auto max-w-3xl px-5">© {new Date().getFullYear()} Max Rock</div>
      </footer>
    </div>
  );
}