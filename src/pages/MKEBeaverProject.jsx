// src/pages/MkeBeaver.jsx
import { Link } from "react-router-dom";

export default function MKEBeaverProject() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Top bar */}
      <header className="border-b border-neutral-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link to="/" className="text-sm transition hover:text-neutral-500">← Back</Link>
          <h1 className="font-serif text-lg font-semibold">MKE Beaver Project</h1>
        </div>
      </header>

      {/* Summary (text left, visuals right) */}
      <section className="mx-auto max-w-5xl px-5 py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-[1.1fr_minmax(0,1fr)] md:items-start">
          {/* Left: copy */}
          <div className="space-y-5">
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
              Beaver Recovery in the Milwaukee River Watershed
            </h2>
            <p className="text-[18px] leading-8 text-neutral-800">
              Through the Superior Bio Conservancy, this project restores hydrology and biological
              integrity in the Milwaukee River Watershed by establishing beaver recovery zones.
              Building on a 2020 study commissioned by MMSD with UWM and Milwaukee Riverkeeper,
              we show how beaver reintroduction can mitigate floods, increase storage, and support
              biodiversity across urban and rural subwatersheds.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Badge>Research-backed</Badge>
              <span className="text-sm text-neutral-500">Findings summarized from the 2020 UWM/MMSD report.</span>
            </div>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-neutral-700">Year: 2020</span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-neutral-700">Role: Geospatial Strategy, Modeling, Cartography</span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-neutral-700">Partners: MMSD, UWM, Milwaukee Riverkeeper</span>
            </div>
          </div>

          {/* Right: big static map + SBC logo */}
          <aside className="md:sticky md:top-24 space-y-6">
            {/* Static Map (large, no caption) */}
            <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
              <img
                src="/mke_maps/mke_beav.jpg"
                alt="Priority index — Milwaukee River Watershed"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* SBC logo link */}
            <a
              href="https://www.superiorbioconservancy.org/milwaukee-river-watershed-project.html"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:bg-neutral-50"
            >
              <img src="/sbc_logo.png" alt="Superior Bio Conservancy" className="h-12 w-auto" />
            </a>
          </aside>
        </div>
      </section>

      {/* Objectives (full width) */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <h3 className="font-serif text-xl font-semibold">Objectives</h3>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-[17px] leading-8 text-neutral-800">
          <li>Assess potential for beaver reestablishment through GIS modeling and field habitat assessment.</li>
          <li>Quantify hydrologic impacts of beaver dams on storm hydrographs and flood mitigation using calibrated watershed models.</li>
          <li>Identify and prioritize restoration zones aligned with MMSD’s green infrastructure and flood resilience goals.</li>
          <li>Establish baseline metrics for biodiversity, ecosystem services, and long-term monitoring.</li>
        </ul>
      </section>

      {/* Key Outcomes (full width) */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex items-center gap-2">
          <h3 className="font-serif text-xl font-semibold">Key Outcomes</h3>
          <Badge>Highlights</Badge>
        </div>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-[17px] leading-8 text-neutral-800">
          <li><strong>52 priority sites</strong> modeled across the watershed.</li>
          <li><strong>Storage:</strong> 777 acres (Stage 1, 18 dams) → 3,793 acres (Stage 4, 52 dams).</li>
          <li><strong>Peak flow reductions:</strong> 6–48% in past storms; 36–46% in design (synthetic) storms.</li>
          <li><strong>Subwatersheds:</strong> North Branch, Cedar Creek, and East/West Branch highest capacity (&gt;6 dams/km); Menomonee ~5, Milwaukee South ~4, Kinnickinnic ~1 dam/km.</li>
          <li><strong>Ecological capacity:</strong> ~4,563 beavers across ~840 colonies; 14 sites suitable for immediate reintroduction.</li>
        </ul>
      </section>

      {/* Context Explained (full width, bulleted) */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <h3 className="font-serif text-xl font-semibold">Context Explained</h3>

        <div className="mt-4 space-y-6 text-[17px] leading-8 text-neutral-800">
          <div>
            <h4 className="font-semibold">Peak Flow – “Past” vs. “Design”</h4>
            <p className="mt-2"><strong>Peak flow</strong> is the maximum streamflow during a storm.</p>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                <strong>Past storm simulations:</strong> used real, historic rainfall events in the watershed.
                Beaver dams would have reduced peak flows by <strong>6–48%</strong>.
              </li>
              <li>
                <strong>Design storm simulations:</strong> standardized “synthetic” events (10- to 200-year storms) used for planning.
                In these scenarios, peak flows dropped by <strong>36–46%</strong>.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Stage 1 → Stage 4 (777 → 3,793 acres)</h4>
            <p>The model projected four stages of beaver dam development at 52 priority sites:</p>
            <ul className="mt-2 list-disc pl-6">
              <li><strong>Stage 1:</strong> 18 dams, ~777 acres ponded</li>
              <li><strong>Stage 2:</strong> 29 dams, ~1,536 acres ponded</li>
              <li><strong>Stage 3:</strong> 41 dams, ~2,720 acres ponded</li>
              <li><strong>Stage 4:</strong> 52 dams, ~3,793 acres ponded</li>
            </ul>
            <p className="mt-3">
              These acreages represent <strong>new water storage</strong> in floodplains, wetlands, and ponds.
              As beaver colonies expand, the watershed gains greater ability to slow runoff, recharge groundwater,
              and reduce downstream flooding while creating diverse habitat.
            </p>
          </div>
        </div>
      </section>

      {/* Data & Methods */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <h3 className="font-serif text-xl font-semibold">Data and Methods</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h4 className="text-sm uppercase tracking-[0.18em] text-neutral-500">Inputs</h4>
            <ul className="mt-3 space-y-2 text-[17px] leading-7 text-neutral-800">
              <li>NHD stream network (segmented), 10-m USGS DEM, flow direction/accumulation rasters.</li>
              <li>LANDFIRE vegetation (EVT &amp; BPS) scored in 30 m / 100 m buffers for forage/suitability.</li>
              <li>SSURGO/STATSGO soils for infiltration, percolation, profile and tension storages.</li>
              <li>USGS streamgages (11 stations) for calibration; NOAA precipitation gauges for forcing.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <h4 className="text-sm uppercase tracking-[0.18em] text-neutral-500">Approach</h4>
            <ul className="mt-3 space-y-2 text-[17px] leading-7 text-neutral-800">
              <li>Adapt BRAT to estimate beaver dam capacities using vegetation and stream-power thresholds.</li>
              <li>Calibrated HEC-HMS basin (213 sub-basins / 138 reaches) to simulate losses, baseflow, routing.</li>
              <li>Insert 52 dams as reservoirs in four stages (increasing number/height) and compare hydrographs with/without dams at 8 outlets (incl. urban flood zones).</li>
              <li>Rank and field-validate sites; compile immediate reintroduction set; draft policy/partner actions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <h3 className="font-serif text-xl font-semibold mb-6">Key Stats</h3>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Priority Sites", v: "52" },
            { k: "Storage (Stage 1 → 4)", v: "777 → 3,793 acres" },
            { k: "Peak Flow Reduction (Past Storms)", v: "6–48%" },
            { k: "Peak Flow Reduction (Design Storms)", v: "36–46%" },
          ].map((it, i) => (
            <li
              key={i}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm text-center"
            >
              <div className="text-sm uppercase tracking-wide text-neutral-500">{it.k}</div>
              <div className="mt-2 text-2xl font-bold text-neutral-900">{it.v}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex items-center gap-2">
          <h3 className="font-serif text-xl font-semibold">Deliverables</h3>
          <Badge>In progress</Badge>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-dashed border-neutral-300 p-4 shadow-sm">
            <div className="text-[12px] uppercase tracking-[0.18em] text-neutral-500">PDF</div>
            <div className="mt-1 text-[17px] text-neutral-800">Summary map + method notes</div>
            <p className="mt-2 text-sm text-neutral-500">Brief of BRAT results, HEC-HMS setup, and site ranking.</p>
          </div>
          <div className="rounded-2xl border border-dashed border-neutral-300 p-4 shadow-sm">
            <div className="text-[12px] uppercase tracking-[0.18em] text-neutral-500">Layers</div>
            <div className="mt-1 text-[17px] text-neutral-800">Priority raster + vector overlays</div>
            <p className="mt-2 text-sm text-neutral-500">BRAT capacity (dams/km), prioritized sites, and riparian buffers.</p>
          </div>
        </div>
      </section>

      {/* Interactive StoryMap (moved to bottom) */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <h3 className="font-serif text-xl font-semibold mb-4">Interactive StoryMap</h3>
        <div className="overflow-hidden rounded-2xl shadow-lg border border-neutral-200">
          <iframe
            src="https://storymaps.arcgis.com/stories/5593ba7d23c04ff8ba4d8b5a2c3dda0a"
            title="Milwaukee River Watershed Beaver Project StoryMap"
            className="w-full h-[600px]"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <p className="mt-2 text-sm text-neutral-600">
          Explore the full interactive experience on{" "}
          <a
            href="https://storymaps.arcgis.com/stories/5593ba7d23c04ff8ba4d8b5a2c3dda0a"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            ArcGIS StoryMaps
          </a>.
        </p>
      </section>
{/* Further Implications */}
<section className="mx-auto max-w-5xl px-5 py-12">
  <h3 className="font-serif text-xl font-semibold">Further Implications</h3>
  <div className="mt-4 space-y-4 text-[17px] leading-8 text-neutral-800">
    <p>
      While this project focused on the Milwaukee River Watershed, its methods and
      findings extend well beyond southeastern Wisconsin. The <strong>Superior Bio Conservancy</strong> is
      exploring how similar analyses can inform recovery zones across the
      <strong> Laurentian Forest Province</strong>, where beaver activity historically played a major role
      in shaping hydrology and biodiversity.
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        Applying the <strong>BRAT + hydrologic modeling framework</strong> across larger regions to
        prioritize recovery zones in northern Minnesota, Wisconsin, Michigan, and Ontario.
      </li>
      <li>
        Integrating <strong>hyperspectral monitoring</strong> and remote sensing into beaver
        habitat models to assess wetland expansion, carbon storage, and biodiversity gains.
      </li>
      <li>
        Aligning recovery zones with <strong>Clean Water Act goals</strong> and regional watershed
        strategies to maximize ecological services (flood control, water quality, fish & wildlife habitat).
      </li>
      <li>
        Providing a scalable, repeatable approach that can be used by partners, land trusts,
        and tribal nations across the Laurentian Forest.
      </li>
    </ul>
    <p>
      In this way, the Milwaukee River pilot is not only a case study in urban and rural
      watershed resilience, but also a template for <strong>large-scale ecological restoration</strong> that 
      supports SBC’s mission across the broader Great Lakes region.
    </p>
  </div>
</section>

      {/* Credits */}
      <section className="mx-auto max-w-5xl px-5 pb-12">
        <h3 className="font-serif text-xl font-semibold">Credits</h3>
        <p className="mt-2 text-[17px] leading-7 text-neutral-800">
          Superior Bio Conservancy and collaborators. Cartography by Max Rock.
          Research foundation: UWM &amp; Milwaukee Riverkeeper for MMSD (Final Report, Nov 2020).
        </p>
      </section>
    </main>
  );
}

/* ================== Components ================== */

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700">
      {children}
    </span>
  );
}
