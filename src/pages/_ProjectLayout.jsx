import { Link } from "react-router-dom";

export default function ProjectLayout({ title, subtitle, hero = "/sat.jpg", children }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Reuse your transparent header but with simple links */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-4">
          <nav className="pointer-events-auto hidden items-center gap-6 text-sm text-white md:flex">
            <Link to="/" className="transition hover:text-neutral-200">Home</Link>
            <a href="/#projects" className="transition hover:text-neutral-200">Work</a>
            <a href="/#resume" className="transition hover:text-neutral-200">Resume</a>
            <a href="/#contact" className="transition hover:text-neutral-200">Contact</a>
          </nav>
          <div className="pointer-events-auto" />
        </div>
      </header>

      {/* Full-bleed hero */}
      <section className="relative">
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
          <div className="relative aspect-[21/9] w-full md:aspect-[16/7]">
            <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
          </div>
          <div className="pointer-events-none absolute inset-0 grid place-items-center px-6 text-center">
            <div className="mx-auto max-w-4xl">
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-white drop-shadow md:text-6xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-4 text-xl text-white/90 md:text-2xl">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        {children}
      </main>
    </div>
  );
}
