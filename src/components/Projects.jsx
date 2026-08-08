import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="section-wrap">
        <Reveal>
          <p className="eyebrow mb-3">04 · Projects</p>
          <h2 className="section-title mb-10">Things I&apos;ve built</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal delay={i * 90} key={project.id} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
