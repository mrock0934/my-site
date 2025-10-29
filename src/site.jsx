// src/site.jsx
import { Link } from "react-router-dom";

/* =======================
   Data — projects
   ======================= */
const PROJECTS = [
  {
    id: "finfur",
    title: "Fin and Fur Films | The American Southwest",
    blurb:
      "Cartographic visuals for a theatrical film exploring the Colorado River’s wildlife, history, and future.",
    tags: ["Cartography", "Remote Sensing", "Conservation"],
    client: "Fin & Fur Films",
    year: 2025,
    href: "/projects/fin-and-fur-southwest",
    cover: "/asw_cover.jpg",
  },
  {
    id: "mke_beaver",
    title: "Milwaukee Beaver Project",
    blurb:
      "Cartography and design of a watershed recovery project highlighting beaver restoration as green infrastructure for climate resilience.",
    tags: ["Conservation", "Hydrology", "Beavers"],
    client: "University of Wisconsin - Milwaukee",
    year: 2020,
    href: "/projects/mke-beaver-project",
    cover: "/mke_logo.png",
  },
  {
    id: "sbc",
    title: "Superior Bio Conservancy",
    blurb:
      "As a founding board member, I help shape conservation strategy across the Laurentian Forest Province and Lake Superior watershed.",
    tags: ["Conservation", "Carbon", "Board Leadership"],
    client: "Superior Bio Conservancy",
    year: 2023,
    href: "/projects/superior-bio-conservancy",
    cover: "/sbc_logo.png",
  },
];

/* =======================
   Main Page
   ======================= */
export default function Site() {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <TopHeader go={go} />
      <SatelliteHero />

      {/* About */}
      <section id="about" className="scroll-mt-24 mx-auto max-w-7xl px-8 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-[260px_minmax(0,1fr)] lg:grid-cols-[300px_minmax(0,1fr)] md:items-start">
          <div className="mt-4 md:mt-6">
            <img
              src="/me.jpg"
              alt="Max Rock"
              className="mx-auto aspect-[3/4] w-full max-w-[300px] rounded-2xl object-cover shadow-sm"
            />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold md:text-3xl">About</h2>

            <p className="mt-6 text-[18px] leading-8 text-neutral-800">
              I am a geographer by trade with a love for exploring landscapes by foot, bike, and boat.
              Sailing has taught me to pay close attention to the patterns of wind, water, and navigation;
              long journeys on a bike have shown me the challenge and reward of moving through terrain at a
              human pace. Alongside these adventures I have always been drawn to photos and the way they
              reveal what a place or thing looks like at a specific moment in time. Photos provide the
              temporal perspective; maps provide the spatial perspective. Together they complement each other and
              tell a fuller story about people, places, and things.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-neutral-800">
              Maps do more than guide us from one place to another. They tell the story of a place, revealing
              its character and meaning in ways that spark both imagination and action. Much like a camera
              captures a fleeting moment, satellites record snapshots of the Earth at a point in time. Maps
              add the vital spatial context, and together with satellite imagery they create a richer and more
              complete perspective.
            </p>

            <p className="mt-6 text-[18px] leading-8 text-neutral-800">
              This pairing offers insights that go far beyond navigation or recreation. Over time, I have come
              to see their power to illuminate issues that matter, providing knowledge we can act upon to drive
              meaningful change. That is why I want to bring the combined power of mapping and remote sensing to
              the world across recreation, storytelling, science, conservation, and more, because they hold the
              ability to inform smarter choices and shape a better future for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-y border-neutral-200/70">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Selected Projects</h2>
          <div className="mt-6">
            <SelectedWork projects={PROJECTS} />
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-serif text-2xl font-bold md:text-3xl">Resume</h2>
        <div className="mt-6 grid gap-10 md:grid-cols-[minmax(0,1fr)_440px] md:items-start">
          <div className="text-[18px] leading-8 text-neutral-800">
            <h3 className="text-xl font-semibold">Executive Summary</h3>
            <p className="mt-3">
              Geographer and geospatial specialist focused on hyperspectral remote sensing,
              cartography, and customer success for conservation and energy.
            </p>
            <ul className="mt-4 space-y-4 list-disc pl-5">
              <li>
                <span className="font-medium block mb-1">
                  Orbital Sidekick — Lead Account Manager
                </span>
                Driving adoption and retention across my current accounts and managing a multimillion-dollar
                book of business spanning three distinct verticals. Lead Oil &amp; Gas presales from
                feasibility to close as the technical POC; own post-sales for all commercial accounts;
                created CS ops framework; partner closely with product &amp; marketing.
              </li>
              <li>
                <span className="font-medium block mb-1">
                  Planet Labs PBC — Customer Success Manager
                </span>
                Drove adoption across 20+ strategic enterprise accounts (forestry, agriculture, finance)
                via onboarding, training, workflow optimization, consistent GTM positioning, and consultative
                guidance; captured feedback to shape product; expanded usage with sales.
              </li>
              <li>
                <span className="font-medium block mb-1">
                  World Bank Group (IFC) — GIS Consultant
                </span>
                Produced executive-ready spatial insights &amp; forecasting for offshore energy in LAC;
                supported financial risk assessments with geospatial indicators and custom visualizations.
              </li>
              <li>
                <span className="font-medium block mb-1">
                  NASA DEVELOP — Team Lead (Mato Grosso Agriculture)
                </span>
                Led a remote-sensing team using Random Forest in Google Earth Engine to classify crop
                types; delivered dashboards and briefs for NASA/NOAA/USDA stakeholders.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              {[
                "Hyperspectral RS",
                "Cartography",
                "QGIS",
                "Python",
                "Terrain/Hydrology",
                "Dashboards",
                "Customer Success",
                "Stakeholder Comms",
              ].map((s) => (
                <span key={s} className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-700">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-neutral-600">
              Full experience, roles, and project details in the PDF.
            </p>
          </div>

          <aside className="md:sticky md:top-24">
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  PDF preview
                </span>
                <div className="flex gap-2">
                  <a href="/Resume_2025.pdf" target="_blank" rel="noreferrer" className="rounded-xl bg-neutral-600 px-3 py-1.5 text-white transition hover:text-neutral-200">Open PDF</a>
                  <a href="/Resume_2025.pdf" download className="rounded-xl border px-3 py-1.5 transition hover:text-neutral-200">Download</a>
                </div>
              </div>
              <div className="mt-4 h-[78vh] overflow-auto rounded-xl border bg-neutral-50">
                <div className="aspect-[8.5/11] w-full">
                  <iframe src="/Resume_2025.pdf#view=FitH" title="Resume PDF" className="h-full w-full" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="leading-8">Interested in collaborating?</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid gap-4">
          <input className="rounded-xl border px-4 py-3" placeholder="Your name" />
          <input className="rounded-xl border px-4 py-3" placeholder="Email" />
          <textarea className="min-h-[140px] rounded-xl border px-4 py-3" placeholder="How can I help?" />
          <div>
            <button className="rounded-xl bg-neutral-600 px-4 py-2 text-white transition hover:text-neutral-200">
              Send
            </button>
          </div>
        </form>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a className="rounded-xl border px-3 py-1.5 transition hover:text-neutral-200" href="mailto:mrock0934@gmail.com">Email</a>
          <a className="rounded-xl border px-3 py-1.5 transition hover:text-neutral-200" href="https://www.linkedin.com/in/max-rock-2554b8153" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </Section>

      <footer className="border-t border-neutral-200/70 py-10 text-center text-sm text-neutral-600">
        <div className="mx-auto max-w-3xl px-5">© {new Date().getFullYear()} Max Rock</div>
      </footer>
    </div>
  );
}

/* =======================
   Header + Hero
   ======================= */
function TopHeader({ go }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <nav className="flex items-center gap-6 text-sm text-white">
          <button onClick={() => go("about")} className="transition hover:text-neutral-200">About</button>
          <button onClick={() => go("projects")} className="transition hover:text-neutral-200">Work</button>
          <button onClick={() => go("resume")} className="transition hover:text-neutral-200">Resume</button>
          <button onClick={() => go("contact")} className="transition hover:text-neutral-200">Contact</button>
        </nav>
        <a href="https://www.linkedin.com/in/max-rock-2554b8153" target="_blank" rel="noreferrer" className="transition hover:opacity-80" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-white"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-.9 1.7-2.1 3.7-2.1 3.9 0 4.6 2.6 4.6 6v9.5h-4v-8.4c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24h-4V8.5z" /></svg>
        </a>
      </div>
    </header>
  );
}

function SatelliteHero() {
  return (
    <section id="top" className="relative">
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <div className="relative aspect-[21/9] w-full md:aspect-[16/7]">
          <img src="/gmny.jpg" alt="Rheinwiesen von Geisenheim" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-0 grid place-items-center px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-white drop-shadow md:text-6xl">
              Max Rock
            </h1>
            <p className="mt-4 text-xl text-white/90 md:text-2xl">
              Aspiring to tell a story of stories.
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 right-6 rounded-md bg-black/40 px-2 py-1 text-right text-xs text-white/80 tracking-wide">
          <div className="font-medium">Rheinwiesen von Geisenheim</div>
          <div>49.9795°N, 7.9625°E</div>
        </div>
      </div>
    </section>
  );
}

/* =======================
   Helper Components
   ======================= */
function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h2 className="font-serif text-2xl font-bold md:text-3xl">{title}</h2>
      <div className="mt-5 space-y-5 text-[18px] text-neutral-800">{children}</div>
    </section>
  );
}

function SelectedWork({ projects }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <li key={p.id} className="group">
          <ProjectCard project={p} />
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project: p }) {
  return (
    <Link
      to={p.href || "#"}
      className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none"
      aria-label={p.title}
    >
      <div
        className={
          p.id === "sbc"
            ? "relative aspect-[4/3] w-full overflow-hidden bg-white flex items-center justify-center"
            : "relative aspect-[4/3] w-full overflow-hidden bg-neutral-100"
        }
      >
        {p.cover ? (
          <img
            src={p.cover}
            alt={p.title}
            loading="lazy"
            className={
              p.id === "sbc"
                ? "h-full w-full object-contain p-6"
                : "h-full w-full object-cover transition duration-300 group-hover:scale-105"
            }
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-neutral-200 to-neutral-100" />
        )}

        {p.logo && (
          <img
            src={p.logo}
            alt={`${p.title} logo`}
            className="absolute left-3 top-3 h-8 w-auto rounded-md bg-white/90 p-1 shadow ring-1 ring-black/5 backdrop-blur"
          />
        )}
      </div>

      <div className="space-y-2 p-4 min-h-[260px] flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg font-semibold leading-tight">{p.title}</h3>
          {p.blurb && <p className="text-sm text-neutral-600 mt-1">{p.blurb}</p>}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
            {p.client && (
              <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-700">
                {p.client}
              </span>
            )}
            {p.year && <span className="text-neutral-500">{p.year}</span>}
          </div>

          <div className="flex flex-wrap gap-1 pt-2">
            {p.tags?.map((t) => (
              <span key={t} className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
