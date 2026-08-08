import { ArrowUpRight, Github, Sparkles } from "lucide-react";

const ACCENTS = [
  { bar: "from-brand to-aqua", tag: "text-brand-light" },
  { bar: "from-aqua to-brand-light", tag: "text-aqua" },
  { bar: "from-sunset to-brand-light", tag: "text-sunset" },
  { bar: "from-brand-light to-aqua", tag: "text-brand-light" },
];

export default function ProjectCard({ project, index }) {
  const accent = ACCENTS[index % ACCENTS.length];
  const hasLive = Boolean(project.liveUrl && project.liveUrl !== "#");

  return (
    <article className="card group relative flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <span className={`h-1 w-full bg-gradient-to-r ${accent.bar}`} />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-sunset/40 bg-sunset/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sunset">
                <Sparkles size={10} />
                Featured
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-mist-400">{project.year}</span>
        </div>

        <h3 className="font-display text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className={`mt-1 text-sm font-medium ${accent.tag}`}>{project.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-300">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-ink-600 bg-ink-900/60 px-2.5 py-1 font-mono text-[11px] text-mist-300"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3 border-t border-ink-700 pt-4">
          {hasLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-brand-light"
            >
              Live demo
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-mist-300 transition-colors hover:text-white"
            >
              <Github size={15} />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
