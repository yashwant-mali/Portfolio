import skillGroups from "../data/skills.js";
import Reveal from "./Reveal.jsx";

const ACCENT_STYLES = {
  brand: "border-brand/30 text-brand-light hover:border-brand/60",
  aqua: "border-aqua/30 text-aqua hover:border-aqua/60",
  sunset: "border-sunset/30 text-sunset hover:border-sunset/60",
};

const DOT_STYLES = {
  brand: "bg-brand",
  aqua: "bg-aqua",
  sunset: "bg-sunset",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="section-wrap">
        <Reveal>
          <p className="eyebrow mb-3">02 · Skills</p>
          <h2 className="section-title mb-10">Tools I reach for</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal delay={i * 80} key={group.label}>
              <div className="card h-full p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${DOT_STYLES[group.accent]}`}
                  />
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-mist-300">
                    {group.label}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-md border bg-ink-900/60 px-3 py-1.5 text-xs font-medium transition-colors ${ACCENT_STYLES[group.accent]}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
