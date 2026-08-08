import { Briefcase } from "lucide-react";
import experience from "../data/experience.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="section-wrap">
        <Reveal>
          <p className="eyebrow mb-3">03 · Experience</p>
          <h2 className="section-title mb-10">Where I&apos;ve worked</h2>
        </Reveal>

        <ol className="relative space-y-10 border-l border-ink-700 pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.id} delay={i * 100} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-aqua shadow-[0_0_0_4px_rgba(63,224,197,0.15)] sm:-left-[calc(2.5rem+5px)]" />

              <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-mist-400">{job.period}</span>
              </div>

              <p className="mb-4 flex items-center gap-1.5 text-sm font-medium text-brand-light">
                <Briefcase size={14} />
                {job.company}
              </p>

              <ul className="mb-4 space-y-2 text-sm leading-relaxed text-mist-300">
                {job.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-mist-400" />
                    {h}
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-ink-600 bg-ink-900/60 px-2.5 py-1 font-mono text-[11px] text-mist-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
