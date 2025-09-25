import { Link } from "react-router-dom";

const projects = [
  {
    id: "finfur",
    title: "Fin and Fur Films | The American Southwest",
    tags: ["Cartography", "Remote Sensing", "Conservation"],
    blurb:
      "Cartographic visuals for a theatrical film exploring the Colorado River’s wildlife, history, and future.",
    year: 2025,
    client: "Fin & Fur Films",
    href: "/work/fin-and-fur",        // your existing page
    cover: "/finfur-cover.jpg",       // put this in /public
  },
  {
    id: "veg-risk",
    title: "Vegetation risk for utilities",
    tags: ["Grid Resilience", "Remote Sensing", "Vegetation Mgmt"],
    blurb:
      "Prioritization of vegetation risks to reduce outages and wildfire exposure.",
    year: 2025,
    client: "—",
    cover: "/veg-risk.jpg",
  },
  {
    id: "beaver-carbon",
    title: "Beaver carbon initiative",
    tags: ["Conservation", "Carbon", "Terrain Analysis"],
    blurb:
      "Estimating carbon storage potential in beaver recovery zones with hyperspectral and DEM data.",
    year: 2025,
    client: "Superior Bio Conservancy",
    cover: "/beaver-carbon.jpg",
  },
];

export default function SelectedWork() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10">
      <h2 className="mb-6 font-serif text-2xl">Selected Work</h2>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.id} className="group">
            <Link
              to={p.href || "#"}
              className="block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="space-y-2 p-4">
                <h3 className="font-serif text-lg font-semibold leading-tight">
                  {p.title}
                </h3>

                <p className="text-sm text-neutral-600">{p.blurb}</p>

                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                  {p.client && (
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-700">
                      {p.client}
                    </span>
                  )}
                  <span className="text-neutral-500">{p.year}</span>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

